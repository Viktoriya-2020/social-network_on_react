import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../Redux/dialogs-reducer';
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
      newMessageBodyCreator: (body) => {
         dispatch( writeMessageActionCreator(body));
      } ,
      addMessage: () => {
         dispatch( addMessageActionCreator());
      }
   }
}
export default compose(
   connect( mapStateToProps, mapDispatchToProps),
   WithAuthRedirect  
 )(Dialogs);
