const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, text: 'Мяу!!!'},
        {id: 2, text: 'Гав-гав!!!'},
        {id: 3, text: '*звуки улитки*'}
    ],
    dialogsData: [
        {id: 1, name: 'Гарик'},
        {id: 2, name: 'Соня'},
        {id: 3, name: 'Белка'},
        {id: 4, name: 'Дуся'},
        {id: 5, name: 'Василий'},
        {id: 6, name: 'Джон'},
        {id: 7, name: 'Карась'}
    ],
    newMessageBody:''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, text: body});
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;