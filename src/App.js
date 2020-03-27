import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
 
  
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <Route path="/profile/:userId?" render={ () => <ProfileContainer  />}/>
          <Route path="/dialogs" render={ () => <DialogsContainer  />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={ () => <UsersContainer  />} />
          <Route path="/login" render={ () => <LoginPage  />} />
          
        </div>
      </div>
    
  );
}


export default App;
