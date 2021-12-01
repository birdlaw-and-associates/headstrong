import React, { useState } from 'react';
import Graph from './Graph.jsx';

//MUI
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GraphWindow = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Graph />
    </>
  );
};

export default GraphWindow;