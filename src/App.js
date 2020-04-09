import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reduser'
import Preloader from './common/Preloader/Preloader';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='content'>
          <Route path='/profile/:userId?' render={() => {
            return <div><React.Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer />
                       </React.Suspense></div>
            }} />
          <Route path='/dialogs' render={() => {
            return <div><React.Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer />
                        </React.Suspense></div>
          }} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />

        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
