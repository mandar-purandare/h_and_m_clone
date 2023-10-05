import React from 'react';
import './Header.css';
import services_list_menu_icon from './Images/services_list_menu_icon.png';
import hm_logo from './Images/h&m_logo.png';
import account_user_icon from './Images/account-user-icon.png';
import heart_icon from './Images/heart-icon.png';
import shopping_bag_icon from './Images/shopping-bag-icon.png';
import magnifying_glass from './Images/magnifying-glass.png';
import { useState } from 'react';
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';

function Header({appBlur, setAppBlur}) {

   const [signInModalDisplay, setSignInModalDisplay] = useState(false);

   function showSignIn(){
         setSignInModalDisplay(signInModalDisplay =>  signInModalDisplay = true);
         setAppBlur(appBlur => appBlur = 'App-Blur');
   }

   const router = useNavigate();

   function goTo(category){
         router('/'+ category);
        // alert(category);
   }

   const categories = ['Ladies','Men','Divided','Baby','Kids','H&M HOME','Sport','Sustainability','Sale'];

   const services = ['Customer Service', 'Newsletter', 'Find a store', <img src={services_list_menu_icon} alt='services list menu icon'/> ]

  return (
    <div className='header-container'>
        <SignIn display={signInModalDisplay} setDisplay={setSignInModalDisplay} appBlur={appBlur} setAppBlur={setAppBlur}/>
        <div className='header-row-1'>
            <nav>
                <ul className='service-links-list'>
                    {services.map(service => <li>{service}</li>)}
                </ul>
            </nav>
            <div>
                <div id='hm_logo_div'>
                    <img src={hm_logo} alt='h&m logo'/>
                </div>
            </div>
            <nav>
                <ul className='account-list'>
                    <li onClick={showSignIn} ><img src={account_user_icon} alt='account user icon'/>Sign in</li>
                    <li><img src={heart_icon} alt='heart icon'/>Favourites</li>
                    <li onClick={() => (goTo('shoppingcart'))}><img src={shopping_bag_icon} alt='shopping bag icon'/>Shopping bag (0)</li>
                </ul>
            </nav>
        </div>
        <div className='header-row-2'>
            <div className='header-row-2-side-divs'></div>
            <nav className='header-row-2-nav'>
                <ul>
                    {categories.map(category => <li onClick={()=>{goTo(category)}}>{category}</li>)}
                </ul>
            </nav>
            <div className='header-row-2-side-divs'>
                <div className='search-div'>
                    <img src={magnifying_glass} alt='magnifying glass'/>
                    <input type='text' placeholder='Search products'/>
                </div>
            </div>
        </div>
        <div className='header-row-3'>
            <h5>HM.com/current_page</h5>
        </div>
    </div>
  )
}

export default Header