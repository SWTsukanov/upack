import React, {useState} from 'react'

import './App.css';


// atom
// import AText from './components/atom/A_Text';
// import AIcon from './components/atom/A_Icon';
// import AImage from './components/atom/A_Img';
// import AInput from './components/atom/A_Input';
import OMenuHeader from './components/organism/O_MenuHeader';




function App() {
  // const imgMap = require('./assets/jpeg-images/mobile/map.jpg');
  // const menu2 = require( './assets/png-icons/menu.png')


  return (
    <div className="App">


      <OMenuHeader />

            {/* <AText 
      text='hello'
      fontSize={'30px'}
      colorText={'green'}
      /> */}

      {/* <AInput
      placeholder='this is input'
      required={false}
      type={'text'}
      /> */}

      {/* <AImage
      width='200px'
      source={imgMap}
      /> */}

      {/* <AIcon 
      source={menu2}
      width={'20px'}
      /> */}

    </div>
  );
}

export default App;
