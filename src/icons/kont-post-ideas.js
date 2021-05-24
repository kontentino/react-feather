import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KontPostIdeas = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M13 4H1v3h12V4z" />
      <path d="M13 1H1v3h12V1z" />
      <path d="M13 10H1v3h12v-3z" />
      <path d="M15 7H3v3h12V7z" />
    </svg>
  );
});

KontPostIdeas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KontPostIdeas.displayName = 'KontPostIdeas';

export default KontPostIdeas;
