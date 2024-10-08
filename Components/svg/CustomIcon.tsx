import React from 'react';

interface CustomIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  width = 17,  // Default width set to 17
  height = 17, // Default height set to 17
  stroke = 'white',  // Default stroke color
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25" // Original viewBox size from your provided SVG
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2731_3967)">
        <path
          d="M4.70898 5.146L4.93857 5.22253C6.08261 5.60387 6.65462 5.79454 6.9818 6.24848C7.30898 6.70242 7.30898 7.30538 7.30898 8.51129V10.7793C7.30898 13.2306 7.30898 14.4563 8.07051 15.2178C8.83203 15.9793 10.0577 15.9793 12.509 15.9793H19.4423"
          stroke={stroke}
          strokeWidth="1.21"
          strokeLinecap="round"
        />
        <path
          d="M9.4748 18.1466C10.1928 18.1466 10.7748 18.7286 10.7748 19.4466C10.7748 20.1646 10.1928 20.7466 9.4748 20.7466C8.75683 20.7466 8.1748 20.1646 8.1748 19.4466C8.1748 18.7286 8.75683 18.1466 9.4748 18.1466Z"
          stroke={stroke}
          strokeWidth="1.21"
        />
        <path
          d="M17.2756 18.1466C17.9936 18.1466 18.5756 18.7287 18.5756 19.4466C18.5756 20.1646 17.9936 20.7466 17.2756 20.7466C16.5576 20.7466 15.9756 20.1646 15.9756 19.4466C15.9756 18.7287 16.5576 18.1466 17.2756 18.1466Z"
          stroke={stroke}
          strokeWidth="1.21"
        />
        <path
          d="M7.30762 7.74658H17.2313C19.0123 7.74658 19.9028 7.74658 20.2881 8.33094C20.6734 8.91531 20.3226 9.73379 19.6211 11.3708L19.2496 12.2374C18.9221 13.0017 18.7583 13.3838 18.4327 13.5985C18.1071 13.8132 17.6913 13.8132 16.8599 13.8132H7.30762"
          stroke={stroke}
          strokeWidth="1.21"
        />
      </g>
      <defs>
        <clipPath id="clip0_2731_3967">
          <rect width="24.375" height="24.375" fill="white" transform="translate(0 0.392578)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomIcon;
