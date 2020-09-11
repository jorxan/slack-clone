import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

  // BEM naming convention//
  return (
    <div className="app">

      {/* Header Component */}
<Header/>
<div className="app__body">
 {/* Sidebar */}
<Sidebar/>
 {/* React-Router-> Chat */}
</div>
     




    </div>
  );
}

export default App;
