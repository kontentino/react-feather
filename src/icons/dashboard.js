import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dashboard = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M10 3H3v9.396h7V3z"></path>
      <path d="M21 3h-7v4.596h7V3z"></path>
      <path d="M21 11.604h-7V21h7v-9.396z"></path>
      <path d="M10 16.404H3V21h7v-4.596z"></path>
    </svg>
  );
});

Dashboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
