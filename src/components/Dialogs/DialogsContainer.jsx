import React from 'react';
import { addMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hok/WithAuthReirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
    
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      
      addMessage: (messageBody) => {
         dispatch( addMessageActionCreator(messageBody));
      }
   }
}
export default compose(connect( mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);
