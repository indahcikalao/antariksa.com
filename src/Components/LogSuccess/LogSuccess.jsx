import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { FaPlane } from 'react-icons/fa';

import './LogSuccess.scss';

export default function LogSuccess({ navi, navLabel, h1, h4 }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate(`${navi}`);
      setTimeLeft(3);
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, navigate, navi]);

  return (
    <Container sx={{ pt: 5, pb: 20 }} maxWidth="md">
      <div style={{ textAlign: 'center' }}>
        <h1>{h1}</h1>
        <p>
          {h4} · · · <FaPlane />
        </p>
        <p>
          Redirecting to {navLabel} in {timeLeft} ...
        </p>
      </div>
    </Container>
  );
}
