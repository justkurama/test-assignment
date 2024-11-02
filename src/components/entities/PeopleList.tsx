import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const PeopleList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const people = useSelector((state: RootState) => state.entity.people);
  const loading = useSelector((state: RootState) => state.entity.loading);
  const error = useSelector((state: RootState) => state.entity.error);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(82 / itemsPerPage); // Total pages based on the number of people

  useEffect(() => {
    dispatch(getPeople(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person: any) => (
          <li key={person.name}>{person.name}</li>
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

export default PeopleList;