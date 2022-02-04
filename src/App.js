import React, {useState} from 'react'
import './App.css';


// atom
import AText from './components/atom/A_Text';
import AIcon from './components/atom/A_Icon';
import AImage from './components/atom/A_Img';
import AInput from './components/atom/A_Input';




function App() {
  // const imgMap = require('./assets/jpeg-images/mobile/map.jpg');
  const iconPlus = require( './assets/png-icons/filter.png')


  return (
    <div className="App">
      <h1>hey</h1>
      <AText 
      text='hello'
      fontSize={'30px'}
      colorText={'green'}
      />

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
      iconSrc={iconPlus}
      width={'20px'}
      /> */}

    </div>
  );
}

export default App;
