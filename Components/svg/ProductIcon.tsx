import React from 'react';

interface ProductIconProps {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}

const ProductIcon: React.FC<ProductIconProps> = ({
  width = 17,
  height = 17,
  stroke = '#F8F9FA',
  fill = '#F8F9FA',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.62685 9.05968C2.0585 6.90141 2.27433 5.82228 2.98747 5.12725C3.11928 4.99879 3.26188 4.88189 3.41369 4.77783C4.23509 4.21484 5.33559 4.21484 7.5366 4.21484H8.90503C11.106 4.21484 12.2065 4.21484 13.0279 4.77783C13.1798 4.88189 13.3224 4.99879 13.4542 5.12725C14.1673 5.82228 14.3831 6.90141 14.8148 9.05968C15.4345 12.1583 15.7444 13.7075 15.0311 14.8054C14.9019 15.0042 14.7512 15.188 14.5816 15.3537C13.6449 16.2684 12.065 16.2684 8.90503 16.2684H7.5366C4.37666 16.2684 2.79669 16.2684 1.86007 15.3537C1.69048 15.188 1.53973 15.0042 1.41058 14.8054C0.697277 13.7075 1.00713 12.1583 1.62685 9.05968Z"
        stroke={stroke}
        strokeWidth="1.20536"
      />
      <circle cx="10.6317" cy="6.62584" r="0.803571" fill={fill} />
      <circle cx="5.81041" cy="6.62584" r="0.803571" fill={fill} />
      <path
        d="M5.81055 4.21429V3.41071C5.81055 2.07931 6.88986 1 8.22126 1C9.55266 1 10.632 2.07931 10.632 3.41071V4.21429"
        stroke={stroke}
        strokeWidth="1.20536"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ProductIcon;
