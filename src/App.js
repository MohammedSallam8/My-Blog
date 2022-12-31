import React from 'react';
import './App.css';
//import Nav from './components/Nav'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          {/*<Nav />*/}
            <Routes>
              <Route path="/" exact element= {<Home/>} />
              <Route path="/blog/:id" element= {<Blog/>} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;