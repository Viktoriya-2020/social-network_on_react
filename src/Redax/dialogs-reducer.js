const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const WRITE_NEW_MESSAGE = "WRITE-NEW-MESSAGE"

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
       ],
       newMessageBody:"Enter message..."
}



const dialogsReducer = (state = initialState,action) => {
    
    if ( action.type === ADD_NEW_MESSAGE ){
        let newMessage = {
            id:8,
            messeges: state.newMessageBody,
        }
        state.messeges.push(newMessage);
        state.newMessageBody = "";
      }
      else if(action.type === WRITE_NEW_MESSAGE ){
        state.newMessageBody = action.body
      }
      return state;
}

export const addMessageActionCreator = () => {
    return {type:ADD_NEW_MESSAGE}
 }  
 export const writeMessageActionCreator = (messageBody) =>{
     return {type: WRITE_NEW_MESSAGE, body:messageBody }
 }
export default dialogsReducer;