import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SpeedDial, SpeedDialAction  } from '@mui/material';
import { FaPaperPlane, FaUserAlt,FaPlus } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { TbReportMoney } from 'react-icons/tb';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { logout } from '../../redux/actions/authActions';

export default function AdminSpeedDials() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const withLink = (to, icon) => <Link to={to}>{icon}</Link>;

  const actions = [
    {
      icon: withLink('/admin-dashboard', <AiFillHome />),
      name: 'Admin Dashboard',
    },
    {
      icon: withLink('/admin-add-new-routes', <FaPlus />),
      name: 'Add New Routes',
    },
    {
      icon: withLink('/admin-list-routes', <FaPaperPlane />),
      name: 'All Route',
    },
    { icon: withLink('/admin-list-user', <FaUserAlt />), name: 'All Users' },
    {
      icon: withLink('/admin-list-transaction', <TbReportMoney />),
      name: 'All Transaction History',
    },
    {
      icon: (
        <FiLogOut
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        />
      ),
      name: 'Log Out',
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        '& .MuiFab-primary': { fontSize: 25, width: 70, height: 70 },
      }}
      icon={<BsMenuButtonWideFill />}>
      {actions.map((action) => (
        <SpeedDialAction
          sx={{
            '& .css-u1qjuz-MuiSpeedDial-actions': {
              fontSize: 25,
              width: 70,
              height: 70,
            },
          }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
