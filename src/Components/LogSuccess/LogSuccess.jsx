import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <img className="plane-img2" src="./img/plane3-cropped.jpg" alt="plane" />
      <div style={{ textAlign: 'center', padding: '30px 0' }}>
        <h1>{h1}</h1>
        <p>
          {h4} · · · <FaPlane />
        </p>
        <p>
          Redirecting to {navLabel} in {timeLeft} ...
        </p>
      </div>
    </div>
  );
}
