import React from 'react'
import './Footer.css'
import LeftMenu from './LeftMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faTwitter, faPinterest, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import big_logo from './Images/h&m_big_logo.png';

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
        <div className='social-media'>
        <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#222222",}} />
        <FontAwesomeIcon icon={faTwitter} style={{color: "#222222",}} />
        <FontAwesomeIcon icon={faInstagram} style={{color: "#222222",}} />
        <FontAwesomeIcon icon={faYoutube} style={{color: "#222222",}} />
        <FontAwesomeIcon icon={faPinterest} style={{color: "#222222",}} />
        </div>
        <div className='copyright'>
            <p className='copyright-text'>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p>
            <p className='copyright-readmore'>READ MORE</p>
        </div>
        <div className='big-logo'>
            <img src={big_logo} alt='h_and_m_logo'/>
        </div>
        <div>
            <p>INDIA |Rs.</p>
        </div>
    </div>
  )
}

export default Footer