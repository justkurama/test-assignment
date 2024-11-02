import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecies } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const SpeciesList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const species = useSelector((state: RootState) => state.entity.species);
    const loading = useSelector((state: RootState) => state.entity.loading);
    const error = useSelector((state: RootState) => state.entity.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(37 / itemsPerPage); // Total pages based on the number of species

    useEffect(() => {
        dispatch(getSpecies(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Species</h2>
            <ul>
                {species.map((specie: any) => (
                    <li key={specie.name}>{specie.name}</li>
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

export default SpeciesList;