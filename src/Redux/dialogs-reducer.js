const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: 'Gevorg' },
        { id: 2, name: 'Isahak' },
        { id: 3, name: 'Mery' },
        { id: 4, name: 'Hovsep' },
        { id: 5, name: 'Pavel' },
        { id: 6, name: 'Ruslan' }
    ],
    messeges: [
        { id: 1, messeges: 'Hi!!!' },
        { id: 2, messeges: 'Hi, how are you?' },
        { id: 3, messeges: 'I am nice' },
        { id: 4, messeges: 'Where are you?' },
        { id: 5, messeges: 'I am here.' },
        { id: 6, messeges: 'What are you doing?' },
        { id: 7, messeges: 'I am sleeping.' }
    ],
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messeges: [...state.messeges]
    }
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let body = action.MessageBody
            stateCopy.messeges.push({ id: 8, messeges: body });
            return stateCopy;

        default:
            return state;
    }
}
export const addMessageActionCreator = (MessageBody) => {
    return { type: ADD_NEW_MESSAGE, MessageBody }
}

export default dialogsReducer;