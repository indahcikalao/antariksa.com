import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { BsGoogle } from 'react-icons/bs';
import { loginWithGoogle } from '../../redux/actions/authActions';

function GoogleLogin() {
  const dispatch = useDispatch();

  const googleLog = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      dispatch(loginWithGoogle(access_token));
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return (
    <a href={`${process.env.REACT_APP_BASE_URL}/auth/loginGoogle`}>
      <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        <BsGoogle style={{ marginRight: '10px' }} />
        Google
      </Button>
    </a>
  );
}

export default GoogleLogin;
