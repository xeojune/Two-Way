import React from 'react'
import './Category.css'

function Category({ text, src }) {
  return (
    <li className='category-item'>
        <img className='category-img' src={src} alt={text} />
        <p className='category-text'>{text}</p>
    </li>
  )
}

export default Category