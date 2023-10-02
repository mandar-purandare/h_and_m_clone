import React from 'react'
import './SingleProductBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function SingleProductBody({dataObj}) {
    

  return (
    <div className='single-product-container'>
        <div className='row-1'>
            <div className='row-1-left-div black-border'>
                {dataObj.bigImages.map((url) => (
                    <div className='big-images-div'>
                        <img src={url}/>
                    </div>
                ))} 
            </div>
            <div className='row-1-right-div black-border'>
                <div className='title-and-heart'>
                    <h4>{dataObj.productName}</h4>
                    <i class="fa-regular fa-heart"></i>
                    {/* <i class="fa-solid fa-heart"></i> */}
                </div>
                <div className='price-and-member-price'></div>
                <h5 className='variants'></h5>
                <div className='variants-img-container'></div>
                <div className='sizes'></div>
                <p className='size-guide'></p>
                <button className='add-to-cart-btn'>Add</button>
                <p className='find-a-store'></p>
                <p className='standard-delivery-info'></p>
                <h4>Delivery and Payment</h4>
                <p className='reviews'>(215 reviews)</p>
                <div className='true-to-size-scale'></div>
                <div className='product-related-info'></div>
                <div className='product-related-info'></div>
                <div className='product-related-info'></div>
            </div>
        </div>
        <div className='row-2'></div>
        <div className='row-3'></div>
    </div>
  )
}

export default SingleProductBody