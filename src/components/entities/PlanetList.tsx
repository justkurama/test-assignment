import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanets } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const PlanetList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const planets = useSelector((state: RootState) => state.entity.planets);
    const loading = useSelector((state: RootState) => state.entity.loading);
    const error = useSelector((state: RootState) => state.entity.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(60 / itemsPerPage); // Total pages based on the number of planets

    useEffect(() => {
        dispatch(getPlanets(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Planets</h2>
            <ul>
                {planets.map((planet: any) => (
                    <li key={planet.name}>{planet.name}</li>
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

export default PlanetList;