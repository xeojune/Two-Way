import React from 'react'
import SORT_LIST from '../Data/sortListData';
import './SortFilter.css'

function SortFilter( {setOptionValue} ) {

  return (
    <div className='sort-wrapper'>
        <select className='sort-title'
            onChange={e => {
                setOptionValue(e.target.value);
            }}
        >
            {SORT_LIST.map(title => {
                return (
                    <option key={title.id} value={title.value}>
                        {title.title}
                    </option>
                );
            })}
        </select>
    </div>
  )
}

export default SortFilter