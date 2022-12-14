import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Protected({ children, roles }) {
  const navigate = useNavigate();

  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      if (!roles.some((role) => role === user.role)) {
        navigate('/');
      }
    }
  }, [user, roles, navigate]);

  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
