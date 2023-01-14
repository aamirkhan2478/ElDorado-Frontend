import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch as MaterialSwitch } from '@material-tailwind/react';

const Switch = ({
  status, carName, carId, handleRemove,
}) => {
  const [switchState, setSwitchState] = useState(status);

  const handleChange = () => {
    setSwitchState(!switchState);
    handleRemove(!switchState, carId);
  };

  return (
    <MaterialSwitch
      name={carName}
      color="amber"
      id={`${carName}-${carId}`}
      checked={switchState}
      onChange={handleChange}
    />
  );
};

Switch.propTypes = {
  status: PropTypes.bool.isRequired,
  carName: PropTypes.string.isRequired,
  carId: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Switch;
