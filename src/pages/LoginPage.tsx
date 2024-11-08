import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/LoginPage.css';
import { RootState } from '../store/store';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const onSubmit = (data: any) => {
    if (data.username === 'admin' && data.password === 'password') {
      dispatch(login());
      navigate('/');
    } else {
      alert('Invalid login');
    }
  };

  if (isAuthenticated) {
    return <div className="container">You are already logged in.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input className="form-control" {...register('username')} />
                  <p className="text-danger">{errors.username?.message}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" {...register('password')} />
                  <p className="text-danger">{errors.password?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;