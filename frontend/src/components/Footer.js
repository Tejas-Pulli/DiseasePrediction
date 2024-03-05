// Footer.js

import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </Typography>
    </footer>
  );
}

export default Footer;
