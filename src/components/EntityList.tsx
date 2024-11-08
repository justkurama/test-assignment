import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store';
import Pagination from './common/Pagination';
import { getEntities } from '../features/entitySlice';
import { EntityType } from '../types/types';
import '../styles/EntityList.css';

const EntityList: React.FC = () => {
  const { entity } = useParams<{ entity: EntityType }>();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => (entity ? state.entity[entity] : []));
  const loading = useSelector((state: RootState) => state.entity.loading);
  const error = useSelector((state: RootState) => state.entity.error);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = {
    people: 82,
    films: 6,
    vehicles: 39,
    starships: 36,
    planets: 60,
    species: 37,
  };
  const totalPages = entity ? Math.ceil(totalItems[entity] / itemsPerPage) : 0;

  useEffect(() => {
    if (entity) {
      dispatch(getEntities({ entity, page: currentPage }));
    }
  }, [dispatch, entity, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!entity) return <p>Invalid entity type.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="entity-list-container">
      <h2 style={{ color: 'var(--color-primary)' }}>
        {entity.charAt(0).toUpperCase() + entity.slice(1)}
      </h2>
      <ul className="entity-list">
        {data.map((item: any) => (
          <li key={item.name || item.title} className="entity-list-item">
            <h3>{item.name || item.title}</h3>
            <Link to={`/${entity}/${item.url.split('/').slice(-2, -1)[0]}`}>
              <p>View Details</p>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EntityList;
