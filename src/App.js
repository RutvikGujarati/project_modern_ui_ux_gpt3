import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Vote from './components/vote';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/*
    <Routes>
      <Route path="/vote" element={<Vote />} />
    </Routes> */}

    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Blog />
    <Footer />
  </div>
);

export default App;
