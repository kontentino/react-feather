import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lightning = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M15.333 1.667L2 17.667h12l-1.333 10.666 13.333-16H14l1.333-10.666z" />
    </svg>
  );
});

Lightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lightning.displayName = 'Lightning';

export default Lightning;
