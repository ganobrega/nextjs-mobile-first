import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      {...props}
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

export default SvgComponent;
