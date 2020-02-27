import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
 
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Route path="/profile" render={ () => <Profile  />}/>
          <Route path="/dialogs" render={ () => <DialogsContainer  />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          
        </div>
      </div>
    
  );
}


export default App;
