import React from 'react'
import './ShoppingCartBody.css'

function ShoppingCartBody({dataObj}) {
  return (
    <div className='shopping-cart-container'>
        <ul className='offers-and-download'>
            <li>Members get free shipping above Rs.1999</li>
            <li>Free & flexible 15 days return</li>
            <li>Download the H&M App</li>
        </ul>
        <h1 className='shopping-cart-title'>Shopping Bag</h1>
        <section className='items-and-checkout'>
            <div className='items-container black-border'>
                {
                    dataObj.data.map((obj) => (
                        <div className='item-template'>
                            <div className='item-img-container black-border'>
                                <img src={obj.url}/>
                            </div>
                            <div className='item-details-container'>
                                <div className='title-price-delete'>
                                    <div className='title-and-price'>
                                        <h3>{obj.title}</h3>
                                        <h4>Rs.{obj.price}</h4>
                                        {obj.memberPrice?
                                        <h5>Member Price Rs.{obj.memberPrice}</h5>:<h5></h5>}
                                    </div>
                                    <div className='delete'><i class="fa-solid fa-trash-can"></i></div>
                                </div>
                                <div className='specs'>
                                    <div>
                                        <p><h6>Art.no.</h6><h6>{obj.artNo}</h6></p>
                                        <p><h6>Color:</h6><h6>{obj.color}</h6></p>
                                    </div>
                                    <div>
                                        <p><h6>Size:</h6><h6>{obj.size}</h6></p>
                                        <p><h6>Total:</h6><h6>{obj.total}</h6></p>
                                    </div>
                                </div>
                                <div className='like-and-quantity'>
                                    <div className='black-border'><i class="fa-regular fa-heart fa-xl"></i></div>
                                    <div><p>1</p><i class="fa-solid fa-chevron-down"></i></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className='checkout-container black-border'></div>
        </section>
    </div>
  )
}

export default ShoppingCartBody