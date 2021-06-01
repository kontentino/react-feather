import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KontAdsPlanner = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M20.167 1.5c1.551 0 2.333.782 2.333 2.333v16.334c0 1.551-.782 2.333-2.333 2.333H3.833c-1.551 0-2.333-.782-2.333-2.333V3.833c0-1.551.782-2.333 2.333-2.333h16.334z" />
      <path d="M12 6v12" />
      <path d="M15.33 8h-5C9.04 8 8 8.898 8 10.002c0 1.105 1.04 2.002 2.33 2.002h3.34c1.29 0 2.33.898 2.33 2.003C16 15.11 14.96 16 13.67 16H8" />
    </svg>
  );
});

KontAdsPlanner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KontAdsPlanner.displayName = 'KontAdsPlanner';

export default KontAdsPlanner;
