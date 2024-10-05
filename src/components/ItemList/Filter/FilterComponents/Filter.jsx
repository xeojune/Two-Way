import React, { useState } from 'react'
import '../FilterStyles/Filter.css'

function Filter({ filterData, selectFilter, filterSelect }) {
  const [isFilterTab, setIsFilterTab] = useState(true);

  const { filterList, filterName } = filterData;

  const handleFilter = () => {
    setIsFilterTab(!isFilterTab);
  };

  return (
    <div className='filter-wrapper'>
        <div className='title'>
            <p className='filter-tag'>{filterName}</p>
            <button className='seeMore' onClick={handleFilter}>
                {isFilterTab ? '+' : '-'}
            </button>
        </div>
        <div className='list'>
            {filterList.map(filter => {
                return (
                    <div className={`hide ${isFilterTab ? 'hidden' : ''}`} key={filter.id}>
                        <div className='select-filter' onClick={() => {selectFilter(filter);}}>
                            <input 
                                className='checkbox' 
                                type='checkbox' 
                                checked={filterSelect.name === filter.name} 
                                readOnly
                            />
                                {filter.name}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Filter