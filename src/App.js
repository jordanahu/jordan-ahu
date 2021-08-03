import React, {useState} from 'react';
import './App.css';
import {Home, About, Navbar, Skills, Projects, Contact, Services} from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [drawerState, setDrawerState] = useState({open:true, close:false})


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
