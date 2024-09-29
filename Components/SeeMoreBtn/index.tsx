import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SeeMoreBtn = ({ width = '150px', height = '50px' }) => {
  return (
    <button
      style={{
        backgroundColor: '#606B6E',
        color: 'white',
        width: width,
        height: height,
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '10px 3%',
        marginTop: '10px',
        fontSize: '16px',
      }}
      onClick={()=> location.href="/product"}
    >
      See More <FaArrowUpRightFromSquare style={{ marginLeft: '10px' }} />
    </button>
  );
};

export default SeeMoreBtn;
