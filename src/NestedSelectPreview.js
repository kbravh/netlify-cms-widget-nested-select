import PropTypes from 'prop-types';
import React from 'react';

const delimiter = "\n\n---\n\n"

export default function Preview({ value }) {
  const [value1, value2] = value.split(delimiter)
  return (
    <div>
      <span>{value1}</span>
      {value2 && <span> - {value2}</span>}
    </div>
  );
}

Preview.propTypes = {
  value: PropTypes.node,
};
