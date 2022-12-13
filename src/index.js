import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import store from './redux/store';
import { Provider } from 'react-redux';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: '13px',
    border: '2px',
  },
  palette: {
    primary: {
      main: '#252C35',
      dark: '#4d6c7a',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
