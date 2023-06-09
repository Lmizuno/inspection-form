import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuilderInformation.module.css';
import { TextField, Typography } from '@mui/material';

const style = {
  marginTop: "1vh",
}

const BuilderInformation = (props) => {
  const [state, updateState] = React.useState({});

  const handleBuilderLicenceChange = (e) => {
    setState({
      ...state,
      builderLicence: e.target.value
    });
  }
  const handleBuilderNameChange = (e) => {
    setState({
      ...state,
      builderName: e.target.value
    });
  }
  const handleRepresentativeChange = (e) => {
    setState({
      ...state,
      representative: e.target.value
    });
  }
  const setState = (e) => {
    updateState(e);
    props.onChange(e);
  };

  return (
    <div className={styles.BuilderInformation}>
      <TextField
        style={style}
        fullWidth
        id="builderLicence"
        label="Vendor/Builder Licence #"
        onChange={handleBuilderLicenceChange}
        value={state.builderLicence}
      />
      <TextField
        style={style}
        fullWidth
        id="builderName"
        label="Vendor/Builder name"
        onChange={handleBuilderNameChange}
        value={state.builderName}
      />
      <TextField
        style={style}
        fullWidth
        id="representative"
        label="Representative"
        onChange={handleRepresentativeChange}
        value={state.representative}
      />
    </div>
  )
};

BuilderInformation.propTypes = {};

BuilderInformation.defaultProps = {};

export default BuilderInformation;
