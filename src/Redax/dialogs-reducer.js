const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
    dialogs: [
        {id:1, name: 'Gevorg'},
        {id:2, name: 'Isahak'},
        {id:3, name: 'Mery'},
        {id:4, name: 'Hovsep'},
        {id:5, name: 'Pavel'},
        {id:6, name: 'Ruslan'}
      ],
       messeges: [
        {id:1, messeges: 'Hi!!!'},
        {id:2, messeges: 'Hi, how are you?'},
        {id:3, messeges: 'I am nice'},
        {id:4, messeges: 'Where are you?'},
        {id:5, messeges: 'I am here.'},
        {id:6, messeges: 'What are you doing?'},
        {id:7, messeges: 'I am sleeping.'}
       ]
}


let initialState = {
const dialogsReducer = (state = initialState,action) => {
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