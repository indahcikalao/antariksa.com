import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
import AdminSpeedDials from './Components/AdminSpeedDial/AdminSpeedDial';
import BuyerSpeedDials from './Components/BuyerSpeedDial/BuyerSpeedDial';
import NotFound from './Pages/NotFound/NotFound';
import Transaction from './Pages/Transaction/Transaction';
import Payment from './Pages/Payment/Payment';
import History from './Pages/History/History';
import AdminNewRoutes from './Pages/AdminNewRoutes/AdminNewRoutes';
import Protected from './Components/Protected/Protected';
import { whoami } from './redux/actions/authActions';
import AdminListRoute from './Pages/AdminListRoute/AdminListRoute';
import AdminListUser from './Pages/AdminListUser/AdminListUser';
import AdminListTransaction from './Pages/AdminListTransaction/AdminListTransaction';

export default function App() {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(
          whoami((status) => {
            if (status === 401) {
              navigate('/login');
            }
          })
        );
      }
    })();
  }, [token, navigate, dispatch]);

  return (
    <>
      {user?.role === 'Admin' && <AdminSpeedDials />}
      {user?.role === 'Buyer' && <BuyerSpeedDials />}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-pass" element={<ForgotPw />} />
        <Route path="/reset-pass" element={<NewPw />} />

        <Route path="/search-result" element={<SearchRes />} />

        <Route
          path="/buyer-profile"
          element={
            <Protected roles={['Buyer', 'Admin']}>
              <BuyerProfile />
            </Protected>
          }
        />
        <Route
          path="/transaction"
          element={
            <Protected roles={['Buyer', 'Admin']}>
              <Transaction />
            </Protected>
          }
        />
        <Route
          path="/history-detail/:id"
          element={
            <Protected roles={['Buyer', 'Admin']}>
              <Payment />
            </Protected>
          }
        />
        <Route
          path="/history"
          element={
            <Protected roles={['Buyer', 'Admin']}>
              <History />
            </Protected>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <Protected roles={['Admin']}>
              <AdminDash />
            </Protected>
          }
        />
        <Route
          path="/admin-add-new-routes"
          element={
            <Protected roles={['Admin']}>
              <AdminNewRoutes />
            </Protected>
          }
        />
        <Route
          path="/admin-add-new-routes"
          element={
            <Protected roles={['Admin']}>
              <AdminNewRoutes />
            </Protected>
          }
        />
        <Route
          path="/admin-list-routes"
          element={
            <Protected roles={['Admin']}>
              <AdminListRoute />
            </Protected>
          }
        />
        <Route
          path="/admin-list-user"
          element={
            <Protected roles={['Admin']}>
              <AdminListUser />
            </Protected>
          }
        />
        <Route
          path="/admin-list-Transaction"
          element={
            <Protected roles={['Admin']}>
              <AdminListTransaction />
            </Protected>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} />
      <Footer />
    </>
  );
}
