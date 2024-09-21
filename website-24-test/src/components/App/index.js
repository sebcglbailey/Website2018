import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import useToken from './useToken';

import './App.css';

import Header from '../Header/';
import Resume from '../Resume/';
import Slate from '../case-studies/Slate/';
import Password from '../Password/';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Password setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Resume />} />
          <Route path='/case-studies/slate' element={<Slate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
