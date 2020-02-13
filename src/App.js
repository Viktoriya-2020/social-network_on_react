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

const App = (props) => {
 
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.sideBar}/>
        <div className='content'>
          <Route path="/profile" render={ () => <Profile 
                posts={props.state.profilePage}
                dispatch={props.dispatch}
                />}/>
          <Route path="/dialogs" render={ () => <Dialogs 
                dialogs={props.state.dialogsPage}
                dispatch={props.dispatch} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          
        </div>
      </div>
    
  );
}


export default App;
