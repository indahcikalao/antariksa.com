import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setTokenGoogle } from '../../redux/actions/authActions';

function SaveToken() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      dispatch(setTokenGoogle(code));
      navigate('/');
    }
  }, [code, navigate]);

  return <div></div>;
}

export default SaveToken;
