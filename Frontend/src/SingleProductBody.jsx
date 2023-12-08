import React from 'react'
import './SingleProductBody.css'
import star_rating from './Images/single_product/star_rating.png'
import true_to_size from './Images/single_product/true_to_size_scale.png';

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
                    <i class="fa-regular fa-heart fa-xl"></i>
                    {/* <i class="fa-solid fa-heart"></i> */}
                </div>
                <div className='price-and-member-price'>
                    <h3>Rs.{dataObj.productPrice}</h3>
                    <h4>Member Price Rs.{dataObj.memberPrice}</h4>
                </div>
                <h5 className='variants'>{dataObj.variants}</h5>
                <div className='variants-img-container'>
                    { dataObj.smallImages.map((url) => (
                        <div className='black-border'>
                            <img src={url}/>
                        </div>
                    ))}
                    
                </div>
                <div className='sizes'>
                    <h5>Sizes</h5>
                    <div className='sizes-div-container'>
                        {
                            dataObj.sizes.map((size) => (
                                <div>{size}</div>
                            ))
                        }
                    </div>
                </div>
                <p className='size-guide'><i class="fa-solid fa-ruler"></i>Size guide</p>
                <button className='add-to-cart-btn'><i class="fa-solid fa-bag-shopping"></i>Add</button>
                <p className='find-a-store'><i class="fa-solid fa-store"></i>Find in store</p>
                <p className='standard-delivery-info'><i class="fa-solid fa-circle-info"></i>Standard delivery in 2-7 days</p>
                <h4>Delivery and Payment</h4>
                <div className='reviews'><img src={star_rating}/><p>(215 reviews)</p></div>
                <div className='true-to-size-scale'>
                    <img src={true_to_size}/>
                </div>
                <div className='product-related-info'><h3>Description & fit</h3><i class="fa-solid fa-chevron-down"></i></div>
                <div className='product-related-info'><h3>Materials & suppliers</h3><i class="fa-solid fa-chevron-down"></i></div>
                <div className='product-related-info'><h3>Care guide</h3><i class="fa-solid fa-chevron-down"></i></div>
            </div>
        </div>
        <div className='row-2'>
            <h3>Style with</h3>
            <div className='sliding-images-container'>
                {
                    dataObj.row2Data.map((obj) =>(
                        <div>
                            <div className='black-border'><img src={obj.url}/></div>
                            <i class="fa-regular fa-heart fa-xl"></i>
                            <h5>{obj.name}</h5>
                            <h5>Rs.{obj.price}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='row-3'>
        <h3>Others also bought</h3>
            <div className='sliding-images-container'>
                {
                    dataObj.row3Data.map((obj) =>(
                        <div>
                            <div className='black-border'><img src={obj.url}/></div>
                            <i class="fa-regular fa-heart fa-xl"></i>
                            <h5>{obj.name}</h5>
                            <h5>Rs.{obj.price}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SingleProductBody