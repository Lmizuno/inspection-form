import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Typography } from '@mui/material';

const Header = () => (
  <div className={styles.Header}>
    <Typography variant="h3" component="h1" align="center" gutterBottom={true}>
    Pre-Delivery Inspection Form
    </Typography>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
