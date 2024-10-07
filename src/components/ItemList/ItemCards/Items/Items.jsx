import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import './Items.css'

const backgroundColors = [
    'lavender',
    'lavenderblush',
    'linen',
    'powderblue',
    'thistle',
];

const getRandomColor = () => {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};


function Items( { eng_name, price, thumbnail_url, productID } ) {
    // const navigate = useNavigate();

    const getRandNum = max => {
        return (Math.random() * max).toFixed(1);
    };

    const goToDetail = () => {
        // navigate(`/products/${productID}`);
        alert('go to detail page');
    };

    return (
    <div className='item-component' onClick={goToDetail}>
        <img 
            className='item-img' 
            src={thumbnail_url} 
            alt='item' 
            style={{ backgroundColor: getRandomColor() }}
        />
        <div className='item-title'>
            <div className='description'>
                <div className='item-name-en'>{eng_name}</div>
            </div>
            <div className='amount'>
                <p className='price'>${price}</p>
                <p className='price-description'>Instant Purchase Price</p>
            </div>
        </div>
        <div className='interests'>
            <div className='bookmark'>
                <FaRegBookmark className='bookmark-icon' />
                <span className='bookmark-num'>{getRandNum(20)}k</span>
            </div>
            <div className='likes'>
                <BiLike className='likes-icon' />
                <span className='likes-num'>{getRandNum(10)}k</span>
            </div>
        </div>
    </div>
  )
}

export default Items