import React from 'react'
import logoImage from '../assets/images.png'
import { Link } from 'react-router-dom'
import '../styles/HeaderStyle.css'

// Icons
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag } from "react-icons/hi2";


function Header() {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <img src={logoImage} alt='logo' />
        </div>
       
        <div className='nav-container'>
            <ul className='headerList'>
                <li className='headerItem'>HOME</li>
                <li className='headerItem'>PROFILE</li>
                <li className='headerItem'>
                    {/* <Link to='/product-list' className='shopText'>
                        SHOP
                    </Link> */}
                    SHOP
                </li>
            </ul>
            <div className='search-container'>
                <CiSearch className='searchBtn' size='27'/>
            </div>
            <div className='cart-container'>
                <HiOutlineShoppingBag className='cartBtn' size='27'/>
            </div>
        </div>
    </div>
  )
}

export default Header