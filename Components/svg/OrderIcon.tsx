import React from 'react';

interface OrderIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}

const OrderIcon: React.FC<OrderIconProps> = ({
  width = 17,
  height = 18,
  stroke = '#F8F9FA',
  fill = 'none',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.82143 9.83984H12.25M5.82143 9.83984V13.8577C5.82143 15.3729 5.82143 16.1305 6.29215 16.6013C6.76287 17.072 7.52049 17.072 9.03571 17.072C10.5509 17.072 11.3086 17.072 11.7793 16.6013C12.25 16.1305 12.25 15.3729 12.25 13.8577V9.83984M5.82143 9.83984C3.60526 9.34736 1.85755 7.64504 1.30694 5.44259L1 4.21484M12.25 9.83984C13.6247 9.83984 14.7818 10.8688 14.9424 12.234L15.4643 16.6702"
        stroke={stroke}
        strokeWidth="1.20536"
        strokeLinecap="round"
      />
      <circle cx="9.03557" cy="4.21429" r="3.21429" stroke={stroke} strokeWidth="1.20536"/>
    </svg>
  );
};

export default OrderIcon;
