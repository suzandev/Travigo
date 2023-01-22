import React from 'react'
import { Navbar, Hero, Memory, Explore, Advertise, Pricings, Banner, Newslatter, Footer } from './components';
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travigodata';

import Practice from './components/Practice';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of world" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI}/>

      <Practice />
    </>
  );
};

export default App;