import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/gabarit/Header';
import Footer from './components/gabarit/Footer';
import Content from './components/gabarit/Content';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;