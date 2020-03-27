import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../Redux/auth-reduser';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component  {
 
    componentDidMount(){
        usersAPI.getAuthUserData().then(response =>{
            
              if(response.data.resultCode === 0){
                
               // let {id, login, email} = response.data.data;
            this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email);//or(id, login, email) 
           
              }
              
          });
    }
     
  render(){
   
    return(
     
        <Header {...this.props}/>
    )
  }
}
let mapStateToProps = (state) => {
  
  return{
    isAuth:state.auth.isAuth,
    login:state.auth.login,
  }
}
export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);
  