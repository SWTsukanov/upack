import React from 'react'

import './App.css';
import Theme from './style/Theme';

import OMenuFooter from './components/organism/O_MenuFooter';
import OMenuHeader from './components/organism/O_MenuHeader';
import OContactsList from './components/organism/O_ContactsList';
import OAboutQuestions from './components/organism/O_AboutQuestions';
import MUniquePack from './components/molecule/M_UniquePack';
import OProductList from './components/organism/O_ProductList';
import MDescription from './components/molecule/M_Description';
import MAbout from './components/molecule/M_About';
import MForm from './components/molecule/M_Form';



function App() {

  return (
    <Theme>
    <div className="App">
      <OMenuHeader />

      <MAbout />
      <MForm />
      <MDescription />
      <OProductList />

      <MUniquePack />
      <OAboutQuestions />

      <OContactsList />
      <OMenuFooter />
    </div>
    </Theme>
  );
}

export default App;



