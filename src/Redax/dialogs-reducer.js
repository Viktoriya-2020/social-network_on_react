const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

const dialogsReducer = (state,action) => {
    debugger;
    if ( action.type === ADD_NEW_MESSAGE ){
        let newMessage = {
            id:8,
            messeges: action.newMessages,
        }
        state.messeges.push(newMessage);
      }
      return state;
}

export const addMessageActionCreator = (text) => {
    return {type:ADD_NEW_MESSAGE, newMessages:text}
 }  

export default dialogsReducer;