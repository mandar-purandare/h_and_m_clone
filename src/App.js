import './App.css';
import Header from './Header';
import HomeBody from './HomeBody';
import Footer from './Footer';
import { useState } from 'react';


function App() {

  const [appBlur, setAppBlur] = useState('App');

  return (
    <div className={appBlur}>
      <Header appBlur={appBlur} setAppBlur={setAppBlur}/>
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default App;
