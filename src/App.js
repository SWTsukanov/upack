import React from 'react'

import './App.css';
import Theme from './style/Theme';
import { Routes, Route, Link } from 'react-router-dom';

import Landing from './components/pages/LandingPage';
import Catalog from './components/pages/Catalog';
import Item from './components/pages/Item';





function App() {

  return (
    <Theme>
      <div className="App">

        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='item' element={<Item />} />
          <Route
            path='*'
            element={
              <main>
                <p>404</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Theme>
  );
}

export default App;



