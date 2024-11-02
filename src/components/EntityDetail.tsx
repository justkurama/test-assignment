import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchEntity } from '../api/swapi';
import { EntityType } from '../types/types';
import styled from 'styled-components';
import './EntityDetail.css';

const Title = styled.h2`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-accent);
  border-radius: 4px;
  font-family: var(--font-family);
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
`;


const EntityDetail: React.FC = () => {
  const { entity, id } = useParams<{ entity: EntityType; id: string }>();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedData, setRelatedData] = useState<{ [key: string]: string }>({});
  const { register, handleSubmit, setValue } = useForm<any>();

  useEffect(() => {
    const getData = async () => {
      try {
        if (entity && id) {
          const data = await fetchEntity(entity, id);
          setData(data);
          await fetchRelatedData(data);
          Object.entries(data).forEach(([key, value]) => setValue(key, value));
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [entity, id, setValue]);

  const fetchName = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name || data.title;
  };

  // This is values of related fields that are fetched from the API so that they can be displayed in the form
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

  const onSubmit: SubmitHandler<any> = (formData) => {
    setData(formData);
    console.log('Updated Data:', formData);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{data.name || data.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {Object.entries(data).map(([key, value]) => {
            if (key === 'url' || key === 'created' || key === 'edited') return null;
            return (
              <li key={key}>
                <strong>{capitalizeFirstLetter(key.replace('_', ' '))}:</strong>
                {relatedData[key] ? (
                  <span>{relatedData[key]}</span>
                ) : (
                  <input {...register(key)} defaultValue={value as string | number | readonly string[] | undefined} />
                )}
              </li>
            );
          })}
        </ul>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EntityDetail;