import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import TextForm from './components/textform';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    

      <Routes>

     <Route path='/About'element={<About/>}/>
   
      <Route path='/' element={ <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} />
    </div>}/>

     </Routes>
     </Router>

   
   </> 
  );
}

export default App;