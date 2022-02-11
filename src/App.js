import React, {useState} from 'react'

import './App.css';



// atom
// import AText from './components/atom/A_Text';
// import AIcon from './components/atom/A_Icon';
// import AImage from './components/atom/A_Img';
// import AInput from './components/atom/A_Input';
// molecule
import MContactShort from './components/molecule/M_ContactsShort';
import MInfoLinks from './components/molecule/M_InfoLinks';

// organism
import OMenuFooter from './components/organism/O_MenuFooter';
import OMenuHeader from './components/organism/O_MenuHeader';
import OContactsMap from './components/organism/O_ContactsMap';



function App() {
  // const imgMap = require('./assets/jpeg-images/mobile/map.jpg');


  return (
    <div className="App">
      <OMenuHeader />

      <OContactsMap />



      <OMenuFooter />
    </div>
  );
}

export default App;



