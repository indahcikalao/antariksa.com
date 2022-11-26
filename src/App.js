import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import SearchRes from './Pages/SearchRes/SearchRes';
import BuyerProfile from './Pages/BuyerProfile/BuyerProfile';
import AdminDash from './Pages/AdminDash/AdminDash';
import ForgotPw from './Pages/ForgotPw/ForgotPw';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPw />} />

        <Route path="/search-result" element={<SearchRes />} />

        <Route path="/buyer-profile" element={<BuyerProfile />} />

        <Route path="/admin-dashboard" element={<AdminDash />} />
      </Routes>
      <Footer />
    </>
  );
}
