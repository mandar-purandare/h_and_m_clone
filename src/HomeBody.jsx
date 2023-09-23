import React from 'react';
import './HomeBody.css';
import LeftMenu from './LeftMenu';
import SmallBanner from './SmallBanner';
import LargeBanner from './LargeBanner';

function HomeBody() {

  const headings = ['Member Exclusive Prices', 'Trending Now', 'New Arrivals', 'Shop by Room', 'Shop by Product', 'Sustainability'];

  const options = [['Shop now'],['Season news- Under Rs.999','Homely-Gifts','Pop of colours'],['New Products'],['Bedroom','Living Room','Bathroom','Nursery','Kids Room','Kitchen','Balcony & Outdoor'],['View All','Decorations','Cushions','Bed Linen','Room Fragrance','Serving & Dining','Cookware','Storage','Bath & Shower','Curtains','Sleepwear','Blankets','Giftwraps','Sale'],['Meet the maker']]

  return (
    <div className='homebody-container'>
        <div className='homebody-side-div'>
            {headings.map((heading,i) => <LeftMenu heading={heading} options={options[i]}/>)}
        </div>
        <div className='homebody-centre-div'>
            <SmallBanner category={'Home Essential Sets'} quote={'Single piece is never enough! Shop in sets & Decorate'}/>
            <LargeBanner/>
        </div>
        <div className='homebody-side-div'></div>
    </div>
  )
}

export default HomeBody