import React from 'react';

const DumbbellIcon = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left weight plate */}
      <rect x="1" y="8" width="4" height="8" />
      {/* Left handle connection */}
      <rect x="5" y="10" width="2" height="4" />
      {/* Center bar/handle */}
      <rect x="7" y="11" width="10" height="2" />
      {/* Right handle connection */}
      <rect x="17" y="10" width="2" height="4" />
      {/* Right weight plate */}
      <rect x="19" y="8" width="4" height="8" />
    </svg>
  );
};

export default DumbbellIcon;
