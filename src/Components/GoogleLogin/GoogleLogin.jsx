import React from 'react';
import { Button } from '@mui/material';
import { BsGoogle } from 'react-icons/bs';

function GoogleLogin() {
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
