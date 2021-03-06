import React from 'react'
import "../../css/Filter/Filter.css"
function Filter() {
  return (
    <div className="filter-wrapper"> 
      <h2 className="Filter-title"> Filter </h2>
     <div className='num-of-product'> Number of product 4 </div>
     <div className='filter-by-size'> 
         <span>Filter</span>
         <select className='filter-select'>
             <option value="ALL">ALL</option>
             <option value="S">S</option>
             <option value="M">M</option>
             <option value="XL">XL</option>
             <option value="L">L</option>
         </select>
      </div>
      <div className='filter-by-size'> 
         <span>Order</span>
         <select className='filter-select'>
             <option value="lastest">Lastest</option>
             <option value="lowter">Lowter</option>
             <option value="highest">Highest</option>
         </select>
      </div>
     </div>
  )
}

export default Filter;
