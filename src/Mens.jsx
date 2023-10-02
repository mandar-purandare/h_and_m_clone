import React from 'react';
import MenBody from './MenBody';

function Mens({appBlur, setAppBlur}) {

    const headings = ['Member Exclusive Prices','New Arrivals','Trending Now','Shop by Product', 'Sustainablity'];
    const options = [['Shop Now'],['View All','Clothes','Shoes & Accessories'],['Trending Now'],
                        ['View All','T-shirts & Tops','Shirts','Trousers','Shoes','Hoodies & Sweatshirts','Knitwear','Jeans',
                        'Basics','Shorts','Cardigans & Jumpers','Jackets & Coats','Suits & Blazers','Underwear & Innerwear',
                        'Swimwear','Socks','Accessories','Sportswear','Care products','Sleepwear & Loungewear','Premium Selection','Sale'],
                        ['H&M Take Care','Learn More']];
    const articleHeading = `Men's Clothing`;
    const articleText = `Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors.`;

  return (
    <div className='mens'>
        <MenBody leftMenuHeadings={headings} leftMenuOptions={options} articleHeading={articleHeading} articleText={articleText}/>
    </div>
  )
}

export default Mens