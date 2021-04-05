import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Memeapp from './components/Memeapp.js';
import Header from './components/Header.js';
import SkeletonLoader from './components/SkeletonLoader';


ReactDOM.render(
  <React.StrictMode>
      <Header />
        <div className="mainContents">
        <Memeapp />
        {/* <SkeletonLoader/> */}
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// Uncomment the SkeletonLoader component, and comment out the Memeapp to see what
//a loading state would look like for this project