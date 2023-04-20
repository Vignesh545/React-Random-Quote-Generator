import './App.css';
import React, { useState } from 'react';
import Header from './header';
import Quotes from './components/Quotes';
import Music from './components/music';
import RadioGroupRating from './rating';
import AddQuote from './components/newquote';
function App() {
  return (
    <div className="App">
      <Header />
      <Music />
      <Quotes />
      <RadioGroupRating />
      <AddQuote />
    </div>
  );
}

export default App;
