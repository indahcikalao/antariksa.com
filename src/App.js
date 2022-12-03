import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import SearchRes from './Pages/SearchRes/SearchRes';
import BuyerProfile from './Pages/BuyerProfile/BuyerProfile';
import AdminDash from './Pages/AdminDash/AdminDash';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-result" element={<SearchRes />} />

        <Route path="/buyer-profile" element={<BuyerProfile />} />

        <Route path="/admin-dashboard" element={<AdminDash />} />
      </Routes>
      <Footer />
    </>
  );
}
