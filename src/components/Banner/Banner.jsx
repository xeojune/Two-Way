import React from 'react';
import Slider from 'react-slick';
// import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Banner.css";

const thumbnail = [
    { id: 1, url: '/images/img1.jpg', background: 'rgb(94, 0, 215)' },
    { id: 2, url: '/images/img2.jpg', background: 'rgb(0, 198, 91)' },
    { id: 3, url: '/images/img3.jpg', background: 'rgb(249, 249, 249)' },
    { id: 4, url: '/images/img4.jpg', background: 'rgb(12, 129, 237)' },
    { id: 5, url: '/images/img5.jpg', background: 'rgb(243, 241, 236)' },
    { id: 6, url: '/images/img6.jpg', background: 'rgb(255, 238, 244)' },
];

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <IoIosArrowBack {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <IoIosArrowForward {...props} />
);

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
};


function Banner() {
    return (
        <Slider className='slider-container' {...settings}>
            {thumbnail.map(item => {
                return (
                    <div className='image-container' key={item.id}>
                        <img src={item.url} alt={`Slide ${item.id}`} style={{ backgroundColor: item.background }}/>
                    </div>
                );
            })}
        </Slider>
    );
}

export default Banner

