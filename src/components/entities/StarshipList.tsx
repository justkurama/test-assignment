import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStarships } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const StarshipList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const starships = useSelector((state: RootState) => state.entity.starships);
    const loading = useSelector((state: RootState) => state.entity.loading);
    const error = useSelector((state: RootState) => state.entity.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(36 / itemsPerPage); // Total pages based on the number of starships

    useEffect(() => {
        dispatch(getStarships(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Starships</h2>
            <ul>
                {starships.map((starship: any) => (
                    <li key={starship.name}>{starship.name}</li>
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

export default StarshipList;