import React from 'react'

import './App.css';

import OMenuFooter from './components/organism/O_MenuFooter';
import OMenuHeader from './components/organism/O_MenuHeader';
import OContactsList from './components/organism/O_ContactsMap';
import Theme from './style/Theme';
import OAboutQuestions from './components/organism/O_AboutQuestions';



function App() {

  return (
    <Theme>
    <div className="App">
      <OMenuHeader />


      <OAboutQuestions />

      <OContactsList />
      <OMenuFooter />
    </div>
    </Theme>
  );
}

export default App;



