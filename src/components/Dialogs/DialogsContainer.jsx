import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
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

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;