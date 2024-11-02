// src/pages/UpdateEntityPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchEntity } from '../api/swapi';
import { EntityType } from '../types/types';
import './UpdateEntityPage.css';

const UpdateEntityPage: React.FC = () => {
  const { entity, id } = useParams<{ entity: EntityType; id: string }>();
  const [data, setData] = useState<any>(null);
  const { register, handleSubmit, setValue } = useForm<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (entity && id) {
        const localData = localStorage.getItem(`${entity}-${id}`);
        if (localData) {
          const parsedData = JSON.parse(localData);
          setData(parsedData);
          Object.entries(parsedData).forEach(([key, value]) => setValue(key, value));
        } else {
          const data = await fetchEntity(entity, id);
          setData(data);
          Object.entries(data).forEach(([key, value]) => setValue(key, value));
        }
      }
    };
    getData();
  }, [entity, id, setValue]);

  const onSubmit: SubmitHandler<any> = (formData) => {
    setData(formData);
    localStorage.setItem(`${entity}-${id}`, JSON.stringify(formData));
    console.log('Updated Data:', formData);
    navigate(`/${entity}/${id}`);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="update-entity-page">
      <h2>Update {data.name || data.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {Object.entries(data).map(([key, value]) => {
            if (key === 'url' || key === 'created' || key === 'edited') return null;
            return (
              <li key={key}>
                <label>{key.replace('_', ' ')}:</label>
                <input {...register(key)} defaultValue={value as string | number | readonly string[] | undefined} />
              </li>
            );
          })}
        </ul>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateEntityPage;