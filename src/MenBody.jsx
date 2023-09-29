import React from 'react';
import './MenBody.css';
import LeftMenu from './LeftMenu';
import SmallBanner from './SmallBanner';
import LargeBanner from './LargeBanner';
import Article from './Article';

function MenBody({leftMenuHeadings, leftMenuOptions, articleHeading, articleText}){

  const headings = leftMenuHeadings;

  const options = leftMenuOptions;

  return (
    <div className='menbody-container'>
        <div className='menbody-side-div'>
            {headings.map((heading,i) => <LeftMenu heading={heading} options={options[i]}/>)}
        </div>
        <div className='menbody-centre-div'>
            
            <LargeBanner 
              heading={'A/W2023'} 
              text={''} 
              customClass={'custom-small-banner'}
              backgroundImage={'mens-autmn-winter'}
            />

            <SmallBanner 
              category={'Affordable fashion, unlimited styles!'} 
              quote={'Everything under ₹1999'}
              customClass={'homely-gifts'}
            />
            <LargeBanner 
              heading={'Wear the attitude, own the street'} 
              text={'Explore our new arrivals'} 
              customClass={'custom-small-banner'}
              backgroundImage={'mens-streetwear'}
            />

            <LargeBanner 
              heading={'H&M MOVE'} 
              text={'New collection featuring StormMove™. Your complete outdoor support'} 
              customClass={'custom-small-banner'}
              backgroundImage={'mens-outdoor'}
            />

            <Article heading={articleHeading} text={articleText}/>

        </div>
        <div className='menbody-side-div'></div>
    </div>
  )
}

export default MenBody