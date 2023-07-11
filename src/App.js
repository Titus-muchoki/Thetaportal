import React from 'react';
import Navbar from './components/Navbar';
import Base from './components/Base';
import { Route, Router, Routes } from 'react-router-dom';
import Teaweights from './components/Teaweights';
import Fertilizer from './components/Fertilizer';

const App = () => {
  return (
    <div className='flex'>
      <Routes>
        <Route path='/' element={<Base />}>
          <Route index element={<Teaweights />} />
          <Route path='/fertilizer' element={<Fertilizer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;