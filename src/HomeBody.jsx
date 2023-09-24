import React from 'react';
import './HomeBody.css';
import LeftMenu from './LeftMenu';
import SmallBanner from './SmallBanner';
import LargeBanner from './LargeBanner';
import Article from './Article';

function HomeBody() {

  const headings = ['Member Exclusive Prices', 'Trending Now', 'New Arrivals', 'Shop by Room', 'Shop by Product', 'Sustainability'];

  const options = [['Shop now'],['Season news- Under Rs.999','Homely-Gifts','Pop of colours'],['New Products'],['Bedroom','Living Room','Bathroom','Nursery','Kids Room','Kitchen','Balcony & Outdoor'],['View All','Decorations','Cushions','Bed Linen','Room Fragrance','Serving & Dining','Cookware','Storage','Bath & Shower','Curtains','Sleepwear','Blankets','Giftwraps','Sale'],['Meet the maker']]

  const articleHeading = `Home décor`;

  const articleText = `Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our`;

  return (
    <div className='homebody-container'>
        <div className='homebody-side-div'>
            {headings.map((heading,i) => <LeftMenu heading={heading} options={options[i]}/>)}
        </div>
        <div className='homebody-centre-div'>
            <SmallBanner 
              category={'Home Essential Sets'} 
              quote={'Single piece is never enough! Shop in sets & Decorate'}
            />
            <LargeBanner 
              heading={'Elevate your home for fall'} 
              text={'Elegant tableware and living room decor'} 
              customClass={'custom-small-banner'}
            />

            <SmallBanner 
              category={'Homely Gifts'} 
              quote={'Find the perfect presents for all the home lovers!'}
              customClass={'homely-gifts'}
            />
            <LargeBanner 
              heading={'New in: Affordable towels'} 
              text={'A bathroom staple in soft cotton terry.'} 
              customClass={'custom-small-banner inner-banner-top'}
              backgroundImage={'towels'}
            />

            <SmallBanner 
              category={'Home news starting Rs.399'} 
              quote={'The easiest way to update your home!'}
              customClass={'home-news'}
            />
            <LargeBanner 
              heading={'Sleep in style'} 
              text={'Modern bedroom news for fall.'} 
              customClass={'custom-small-banner'}
              backgroundImage={'bedroom'}
            />

            <Article heading={articleHeading} text={articleText}/>

        </div>
        <div className='homebody-side-div'></div>
    </div>
  )
}

export default HomeBody