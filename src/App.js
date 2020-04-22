import React from 'react';
import Headers from './component/Header/Header'
// import logo from './logo.svg';
import Body from './component/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App" style={{position:'relative'}}>
      <Headers/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
