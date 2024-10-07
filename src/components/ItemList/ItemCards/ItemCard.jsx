import React from 'react'
import Items from './Items/Items'
import './ItemCard.css'

function ItemCard({ productList, loadMore }) {
  return (
    <div className='item-wrapper'>
        <div className='item-list'>
            {productList.map(product => {
                const {
                    product_id, 
                    eng_name,
                    thumbnail_url,
                    price,
                } = product;
                return (
                    <Items 
                        key={product_id}
                        eng_name={eng_name}
                        price={price}
                        thumbnail_url={thumbnail_url}
                        productID={product_id}
                    />
                );
            })}
        </div>
        <button className='load-more' onClick={loadMore}>More</button>
    </div>
  )
}

export default ItemCard