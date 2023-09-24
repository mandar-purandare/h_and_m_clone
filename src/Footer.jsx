import React from 'react'
import './Footer.css'
import LeftMenu from './LeftMenu'

function Footer() {

const headings = ['SHOP','CORPORATE INFO','HELP'];

const options = [
                    ['Ladies','Men','Baby','Kids','H&M HOME','Sport'],
                    ['Career at H&M','About H&M group','Sustainability H&M Group','Press','Investor relations','Corporate governance'],
                    ['Customer service','My H&M','Find a store','Legal & Privacy','Contact','Report a scam','Cookie Notice','Cookie settings']
                ];

  return (
    <div className='footer'>
        <div className='footer-lists'>
            {headings.map((heading,i) => <LeftMenu heading={heading} options={options[i]} customClass={'footerLists'}/>)}
            <div className='news-letter-signup'>
                <h4>Sign up for newsletter</h4>
                <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                <h4>READ MORE </h4>
            </div>
        </div>
        {/* <div className='social-media'>
        <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#222222",}} />
        </div> */}
        
    </div>
  )
}

export default Footer