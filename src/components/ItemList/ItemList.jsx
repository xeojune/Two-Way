import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import Category from './Category/Category'
import Filter from './Filter/FilterComponents/Filter'
import CATEGORY_LIST from './Data/categoryListData'
import { FILTER_CATEGORY, SHOES_FILTER, PRICE_FILTER, CLOTHING_FILTER } from './Data/filterData'
import './ItemList.css'

function ItemList() {
  const [selectFilter, setSelectFilter] = useState({});
  const [selectPrice, setSelectPrice] = useState({});
  const [selectShoeSize, setSelectShoeSize] = useState([]);
  const [selectClothSize, setSelectClothSize] = useState([]);

  const handleFilter = filter => {
    if (selectFilter.name === filter.name) {
      setSelectFilter({});
    } else {
      setSelectFilter(filter);
    }
  };

  const handlePriceFilter = price => {
    if (selectPrice.name === price.name) {
      setSelectPrice({});
    } else {
      setSelectPrice(price);
    }
  };

  const handleSelectShoeSize = sizes => {
    if (selectShoeSize.includes(sizes)) {
      setSelectShoeSize([...selectShoeSize.filter(size => size !== sizes)]);
    } else {
      setSelectShoeSize(prev => [...prev, sizes]);
    }
  };

  const handleSelectClothSize = sizes => {
    if (selectClothSize.includes(sizes)) {
      setSelectClothSize([...selectClothSize.filter(size => size !== sizes)]);
    } else {
      setSelectClothSize(prev => [...prev, size]);
    }
  };


  const handleInput = e => {
    e.preventDefault();
    setUserInput(e.target.search.value);
  };

  const deleteAllFilter = () => {
    setSelectFilter({});
    setSelectPrice({});
    setSelectShoeSize([]);
    setSelectClothSize([]);
  };

  const isFilterSelected = 
    selectFilter.name ||
    selectPrice.name ||
    selectShoeSize.length + selectClothSize.length !== 0;

  const totalFilter =
    !selectFilter.name && !selectPrice.name
    ? selectShoeSize.length + selectClothSize.length
    : selectFilter.name && selectPrice.name
    ? selectShoeSize.length + selectClothSize.length + 2
    : selectFilter.name || selectPrice.name
    ? selectShoeSize.length + selectClothSize.length + 1
    : null;
  
  return (
    <div className='list-wrapper'>
      <SearchBar handleInput={handleInput} />
      <div className='category-wrapper'>
        <ul className='category-list'>
          {CATEGORY_LIST.map((category) => {
            return (
              <Category key={category.id} src={category.src} text={category.text} />
            );
          })}
        </ul>
      </div>

      <div className='content'>
        <div className='search-filter'>
          <div className='filter'>
            Filter
            {isFilterSelected && (
              <>
                <div className='filter-status'>{totalFilter}</div>
                <div className='filter-delete' onClick={deleteAllFilter}>Clear All</div>
              </>
            )}
          </div>
          {/* Filter Categories */}
          <Filter 
            filterData={FILTER_CATEGORY}
            selectFilter={handleFilter}
            filterSelect={selectFilter}
          />
          {/* Price Filter */}
          <Filter 
            filterData={PRICE_FILTER}
            selectPrice={handlePriceFilter}
            filterSelect={selectPrice}
          />
          {/* Shoes Filter */}
          <Filter
            filterData={SHOES_FILTER}
            selectShoeSize={handleSelectShoeSize}
            filterSelect={selectShoeSize}
          />
          {/* Clothes Filter */}
          <Filter
            filterData={CLOTHING_FILTER}
            selectClothSize={handleSelectClothSize}
            filterSelect={selectClothSize}
          />

        </div>
      </div>

    </div>
  )
}

export default ItemList