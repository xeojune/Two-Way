import React from 'react'
import './ItemNotFound.css'

function ItemNotFound() {
  return (
    <div className='notFound-wrapper'>
        <p className='error-text'>No Search Result Has Been Found</p>
        <p className='error-subtext'>
            For Product Registration: <span className='sub-span'>App 1:1 Inquiries</span> 
        </p>
    </div>
  );
};

export default ItemNotFound