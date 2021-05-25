import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PostIdeas = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <g transform="translate(1.392 2.718) scale(1.32594)">
        <rect x="1" y="4" width="12" height="3" />
        <rect x="1" y="1" width="12" height="3" />
        <rect x="1" y="10" width="12" height="3" />
        <rect x="3" y="7" width="12" height="3" />
      </g>
    </svg>
  );
});

PostIdeas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PostIdeas.displayName = 'PostIdeas';

export default PostIdeas;
