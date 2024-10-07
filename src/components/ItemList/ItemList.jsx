import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import Category from './Category/Category'
import Filter from './Filter/FilterComponents/Filter'
import ProductFilter from './Filter/FilterComponents/ProductFilter'
import CATEGORY_LIST from './Data/categoryListData'
import { FILTER_CATEGORY, SHOES_FILTER, PRICE_FILTER, CLOTHING_FILTER } from './Data/filterData'
import './ItemList.css'
import SortFilter from './SortFilter/SortFilter'
import ItemCard from './ItemCards/ItemCard'
import ItemNotFound from './ItemCards/ItemNotFound/ItemNotFound'
import DUMMY_PRODUCTS from './Data/DummyProductData.json'

const OFFSET = 0;
const LIMIT_INCREMENT = 8;

function ItemList() {
  const [selectFilter, setSelectFilter] = useState({});
  const [selectPrice, setSelectPrice] = useState({});
  const [selectShoeSize, setSelectShoeSize] = useState([]);
  const [selectClothSize, setSelectClothSize] = useState([]);
  const [optionValue, setOptionValue] = useState('sales');
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(8);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      setIsScrolled(!isTop);
    });
  }, []);

  useEffect(() => {
    setProductList(DUMMY_PRODUCTS);
  }, []);

  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleInput = e => {
    e.preventDefault();
    setUserInput(e.target.search.value);
  };

  // const loadQueryString = `&offset=${OFFSET}&limit=${limit}`;

  

  const loadMore = () => {
    if (limit > 64) {
      alert('상품이 더 이상 없습니다!');
    } else {
      setLimit(limit + 8);
    }
  };

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
      setSelectClothSize(prev => [...prev, sizes]);
    }
  };

  const deleteFilter = selectedFilter => {
    setSelectShoeSize([
      ...selectShoeSize.filter(size => size !== selectedFilter),
    ]);
    setSelectClothSize([
      ...selectClothSize.filter(size => size !== selectedFilter),
    ]);
    setSelectFilter(
      selectFilter === selectedFilter ? {} : selectFilter
    );
    setSelectPrice(selectPrice === selectedFilter ? {} : selectPrice);
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
            selectFilter={handlePriceFilter}
            filterSelect={selectPrice}
          />
          {/* Shoes Filter */}
          <ProductFilter
            filterData={SHOES_FILTER}
            selectFilter={handleSelectShoeSize}
            filterSelect={selectShoeSize}
            filterType="shoes"
          />
          {/* Clothes Filter */}
          <ProductFilter
            filterData={CLOTHING_FILTER}
            selectFilter={handleSelectClothSize}
            filterSelect={selectClothSize}
            filterType="clothes"
          />
        </div>
        <div className='item-container'>
          <div className='search-options'>
            <div className='filter-categories'>
              {selectFilter.name && (
                <div className='filter-category'>
                  {selectFilter.name}
                  <button className='delete-button'
                    onClick={() => deleteFilter(selectFilter)}
                  >
                    X
                  </button>
                </div>
              )}
              {selectPrice.name && (
                <div className='filter-category'>
                  {selectPrice.name}
                  <button className='delete-button'
                    onClick={() => deleteFilter(selectPrice)}
                  >
                    X
                  </button>
                </div>
              )}
              {selectShoeSize && 
                selectShoeSize.map(size => {
                  return(
                    <div className='filter-category' key={size.id}>
                      {size.name}
                      <button className='delete-button'
                        onClick={() => deleteFilter(size)}
                      >
                        X
                      </button>
                    </div>
                );
              })}
              {selectClothSize && 
                selectClothSize.map(size => {
                  return(
                    <div className='filter-category' key={size.id}>
                      {size.name}
                      <button className='delete-button'
                        onClick={() => deleteFilter(size)}
                      >
                        X
                      </button>
                    </div>
                );
              })}
            </div>
            <SortFilter setOptionValue={setOptionValue}/>
          </div>
          {productList.length !== 0 ? (
            <ItemCard productList={productList.slice(0, limit)} loadMore={loadMore}/>
          ):(
            <ItemNotFound />
          )}
        </div>
      </div>
      {isScrolled && <button className='goToTopBtn' onClick={handleGoTop}>&uArr;</button>}
    </div>
  );
};

export default ItemList