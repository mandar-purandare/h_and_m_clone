import './App.css';
import Header from './Header';
import HomeBody from './HomeBody';
import Footer from './Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mens from './Mens';

function App() {

  const [appBlur, setAppBlur] = useState('App');

  const headings = ['Member Exclusive Prices', 'Trending Now', 'New Arrivals', 'Shop by Room', 'Shop by Product', 'Sustainability'];

  const options = [['Shop now'],['Season news- Under Rs.999','Homely-Gifts','Pop of colours'],['New Products'],['Bedroom','Living Room','Bathroom','Nursery','Kids Room','Kitchen','Balcony & Outdoor'],['View All','Decorations','Cushions','Bed Linen','Room Fragrance','Serving & Dining','Cookware','Storage','Bath & Shower','Curtains','Sleepwear','Blankets','Giftwraps','Sale'],['Meet the maker']]

  const articleHeading = `Home décor`;

  const articleText = `Level up your interior aesthetics with our home décor range. Whether you've moved into a new home, or you want to breathe new life into your existing living space, our collection has every room in the house covered. Our furniture edit offers stunning side tables and comfy lounge chairs, plus there’s an array of chic lighting to create a calming ambience. Looking for those finishing touches? Check out our`;

  return (
    <div className={appBlur}>

      <Routes>
        <Route exact path='/Men' element={<Mens appBlur={appBlur} setAppBlur={setAppBlur} />}/>
        <Route exact path='/H&M HOME' element={<App/>}/>
      </Routes>

      <Header appBlur={appBlur} setAppBlur={setAppBlur}/>
      <HomeBody leftMenuHeadings={headings} leftMenuOptions={options} articleHeading={articleHeading} articleText={articleText}/>
      <Footer/>
    </div>
  );
}

export default App;
