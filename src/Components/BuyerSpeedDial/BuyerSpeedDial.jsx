import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { FaPaperPlane, FaUserAlt, FaPlane } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { logout } from '../../redux/actions/authActions';

export default function BuyerSpeedDials() {
  const dispatch = useDispatch();
  const withLink = (to, icon) => <Link to={to}>{icon}</Link>;

  const actions = [
    { icon: withLink('/buyer-profile', <FaUserAlt />), name: 'My Profile' },
    { icon: withLink('/', <FaPlane />), name: 'Book a Flight' },
    {
      icon: withLink('/history', <FaPaperPlane />),
      name: 'Flight History',
    },
    { icon: <FiLogOut onClick={dispatch(logout)} />, name: 'Log Out' },
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
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
