import React from 'react';
import HomeBody from './HomeBody';

const headings = ['Member Exclusive Prices', 'Trending Now', 'New Arrivals', 'Shop by Room', 'Shop by Product', 'Sustainability'];

  const options = [['Shop now'],['Season news- Under Rs.999','Homely-Gifts','Pop of colours'],['New Products'],['Bedroom','Living Room','Bathroom','Nursery','Kids Room','Kitchen','Balcony & Outdoor'],['View All','Decorations','Cushions','Bed Linen','Room Fragrance','Serving & Dining','Cookware','Storage','Bath & Shower','Curtains','Sleepwear','Blankets','Giftwraps','Sale'],['Meet the maker']]

  const articleHeading = `Home décor`;

  const articleText = `Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our`;

function Home() {
  return (
    <div className='home'>
        <HomeBody 
            leftMenuHeadings={headings} 
            leftMenuOptions={options} 
            articleHeading={articleHeading} 
            articleText={articleText}
        />
    </div>
  )
}

export default Home