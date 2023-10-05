import React from 'react'
import './ShoppingCartBody.css'
import payment_methods from './Images/payment_methods.png'
import cube from './Images/cube.png'

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
            <div className='checkout-container black-border'>
                <div className='discounts'>
                    <h5>Discounts</h5>
                    <h5 className='underline'>Apply discount</h5>
                </div>
                <h5 className='login-request'>Login to use your personal offers!</h5>
                <button className='login-btn'>Log in</button>
                <hr className='gray-line'/>
                <div className='order-amount'><span>Order value</span><span>Rs. 4,597.00</span></div>
                <div className='order-amount'><span>Delivery</span><span>FREE</span></div>
                <hr className='black-line'/>
                <div className='order-amount total'><span>Total</span><span>Rs. 4,597.00</span></div>
                <button className='checkout-btn'>Continue to checkout</button>
                <div className='payment-methods-container'>
                    <img src={payment_methods}/>
                </div>
                <p className='refund-terms'>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
                <p className='refund-terms'>15 days free returns. Read more about <span className='underline'>return and refund policy</span></p>
                <p className='refund-terms'>Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>
            </div>
        </section>
        <div className='member-benifits black-border'>
            <h3>MEMBER BENEFITS</h3>
            <p>Become a member to receive fantastic offers!</p>
            <p>You can apply discount codes in the checkout process</p>
            <p>There are many membership benefits.</p>
            <p>You will get prompted to become a member if you're not already a member and you have a member priced item in your shopping bag</p>
        </div>
        <div className='delivery-and-return-options black-border'>
                <img src={cube}/>
                <p>Delivery and return options</p>
                <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  )
}

export default ShoppingCartBody