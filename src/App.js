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
import store from './redux/store';
// import AdminSpeedDials from './Components/AdminSpeedDial/AdminSpeedDial';
import BuyerSpeedDials from './Components/BuyerSpeedDial/BuyerSpeedDial';
import NotFound from './Pages/NotFound/NotFound';
import Transaction from './Pages/Transaction/Transaction';
import Payment from './Pages/Payment/Payment';
import History from './Pages/History/History';
import AdminLogin from './Pages/AdminLogin/AdminLogin'

export default function App() {
  return (
    <Provider store={store}>
      {/* <AdminSpeedDials /> */}
      <BuyerSpeedDials />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPw />} />
        <Route path="/reset-pass" element={<NewPw />} />

        <Route path="/search-result" element={<SearchRes />} />

        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer />
    </Provider>
  );
}
