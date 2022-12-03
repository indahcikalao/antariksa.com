import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import SearchRes from './Pages/SearchRes/SearchRes';
import BuyerProfile from './Pages/BuyerProfile/BuyerProfile';
import AdminDash from './Pages/AdminDash/AdminDash';
import ForgotPw from './Pages/ForgotPw/ForgotPw';
import NewPw from './Pages/ForgotPw/NewPw';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPw />} />
        <Route path="/reset-pass" element={<NewPw />} />

        <Route path="/search-result" element={<SearchRes />} />

        <Route path="/buyer-profile" element={<BuyerProfile />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />
      </Routes>

      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={3000}
      />
      <Footer />
    </Provider>
  );
}
