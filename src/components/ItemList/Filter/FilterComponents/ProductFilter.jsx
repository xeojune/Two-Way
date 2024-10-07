import React, { useState } from 'react'
import '../FilterStyles/ProductFilter.css'

function ProductFilter({ filterData, selectFilter, filterSelect, filterType }) {
  const [isFilterTab, setIsFilterTab] = useState(true);

  const { filterList, filterName } = filterData;

  const handleFilter = () => {
    setIsFilterTab(!isFilterTab);
  };

  return (
    <div className={`filter-wrapper`}>
        <div className='title'>
            <p className='filter-tag'>{filterName}</p>
            <button className='seeMore' onClick={handleFilter}>
                {isFilterTab ? '+' : '-'}
            </button>
        </div>
        <div className='List'>
            {filterList.map(filter => {
                return (
                    <button 
                    className={`checkBox ${isFilterTab ? 'hidden' : ''} ${filterSelect.includes(filter) ? 'selected' : ''} ${filterType}`}
                    key={filter.id}
                    onClick={() => selectFilter(filter)}
                    >
                        {filter.name}
                    </button>    
                );
            })}
        </div>
    </div>
  )
}

export default ProductFilter