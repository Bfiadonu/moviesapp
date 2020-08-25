import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import store from './store';


function App() {
  return ( 
    
    <Provider store={store} > 
    <Router>
    <div>
    <Navbar />
    <Landing />
    <Footer />
    </div>
    </Router>
    </Provider>
  );
}

export default App;
