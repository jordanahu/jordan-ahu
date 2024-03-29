import React, {useState,useLayoutEffect} from 'react';
import './App.css';
import { Navbar} from './components';
import {Home, About, Skills, Projects, Contact, Services} from "pages";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useInfo } from "common/Hooks";

function App() {
  const [drawerState, setDrawerState] = useState({open:true, close:false})

  const {name} = useInfo();
  
  function disableImageDownload(){
    let images = [...document.querySelectorAll(`[alt*=${name.split(" ")[0]}]`)];
    images.forEach(image=>image.addEventListener("contextmenu", e=>e.preventDefault()));
    
  }

  useLayoutEffect(disableImageDownload);



  function handleDrawerState(event, open){
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState((prev)=>{
      return {
        ...prev,
        close:open
      }
    });

  }



  return (
      <Router>
      <div className="App">
       
        <CssBaseline/>
        <Navbar handleDrawerState={handleDrawerState} drawerState={drawerState}/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact-me" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
