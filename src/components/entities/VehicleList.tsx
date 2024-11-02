import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVehicles } from '../../features/entitySlice';
import { RootState, AppDispatch } from '../../store/store';
import Pagination from '../common/Pagination';

const VehicleList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const vehicles = useSelector((state: RootState) => state.entity.vehicles);
    const loading = useSelector((state: RootState) => state.entity.loading);
    const error = useSelector((state: RootState) => state.entity.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(39 / itemsPerPage); // Total pages based on the number of vehicles

    useEffect(() => {
        dispatch(getVehicles(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map((vehicle: any) => (
                    <li key={vehicle.name}>{vehicle.name}</li>
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

export default VehicleList;