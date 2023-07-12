import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Base from './components/Base';
import { Route, Router, Routes } from 'react-router-dom';
import Teaweights from './components/Teaweights';
import Fertilizer from './components/Fertilizer';
import Finance from './components/Finance';
import Signup from './components/Signup';



const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  return (
    <div className='flex py-10 px-20 items-center'>
      {!isSignedUp ? (
        <Signup onSignUp={handleSignUp} />
      ) : (
        <Routes>
          <Route path='/' element={<Base />}>
            <Route index element={<Teaweights />} />
            <Route path='/fertilizer' element={<Fertilizer />} />
            <Route path='/finance' element={<Finance />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;