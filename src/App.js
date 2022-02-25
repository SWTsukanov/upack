import React,{useEffect} from 'react'

import './App.css';
import Theme from './style/Theme';
import { Routes, Route } from 'react-router-dom';

import Landing from './components/pages/LandingPage';
import Catalog from './components/pages/Catalog';
import Item from './components/pages/Item';

import { getDataItem } from './store/Slice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getDataItem());

}, [])

  return (
    <Theme>
      <div className="App">

        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<Item />} />

          <Route
            path='*'
            element={
              <main>
                <p>404 not found</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Theme>
  );
}

export default App;



