// import logo from './logo.svg';        
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
function App() {
  
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);

      },1500)
  }
  const toogleMode= ()=>{
    if(mode==='light'){
      document.body.style.backgroundColor="rgba(16, 41, 50, 0.89)";
      setmode('dark');
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showAlert(" Light mode has been enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} toogleMode={toogleMode}/>
   
    <div className="container my-3"> 
    <Alert alert={alert}/>
    {/* <Switch>

          <Route exact path='/'> */}
          <TextForm heading="Enter the text to analze below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
          {/* <Route exact path='/about'>
            <About/>
          </Route> */}
        
    {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
