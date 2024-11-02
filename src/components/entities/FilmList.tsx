import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const FilmList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const films = useSelector((state: RootState) => state.entity.films);
  const loading = useSelector((state: RootState) => state.entity.loading);
  const error = useSelector((state: RootState) => state.entity.error);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; // Assuming there is only 1 page of films data

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {films.map((film: any) => (
          <li key={film.title}>{film.title}</li>
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

export default FilmList;