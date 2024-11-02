// src/components/EntityDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEntity } from '../api/swapi';
import { EntityType } from '../types/types';
import './EntityDetail.css';

const EntityDetail: React.FC = () => {
  const { entity, id } = useParams<{ entity: EntityType; id: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedData, setRelatedData] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        if (entity && id) {
          const localData = localStorage.getItem(`${entity}-${id}`);
          if (localData) {
            const parsedData = JSON.parse(localData);
            setData(parsedData);
            await fetchRelatedData(parsedData);
          } else {
            const data = await fetchEntity(entity, id);
            setData(data);
            await fetchRelatedData(data);
          }
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [entity, id]);

  const fetchName = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name || data.title;
  };

  const fetchRelatedData = async (data: any) => {
    const relatedFields = ['homeworld', 'films', 'species', 'vehicles', 'starships', 'residents', 'pilots', 'planets', 'characters', 'people'];
    const relatedData: { [key: string]: string } = {};

    for (const field of relatedFields) {
      if (Array.isArray(data[field])) {
        if (data[field].length > 0) {
          const names = await Promise.all(data[field].map((url: string) => fetchName(url)));
          relatedData[field] = names.join(', ');
        } else {
          relatedData[field] = 'N/A';
        }
      } else if (typeof data[field] === 'string' && data[field].startsWith('http')) {
        relatedData[field] = await fetchName(data[field]);
      }
    }

    setRelatedData(relatedData);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="entity-detail">
      <h2>{data.name || data.title}</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => {
          if (key === 'url' || key === 'created' || key === 'edited') return null;
          return (
            <li key={key}>
              <strong>{capitalizeFirstLetter(key.replace('_', ' '))}:</strong>
              {relatedData[key] ? (
                <span>{relatedData[key]}</span>
              ) : (
                <span>{value as string | number | readonly string[] | undefined}</span>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={() => navigate(`/${entity}/${id}/update`)}>Edit</button>
    </div>
  );
};

export default EntityDetail;