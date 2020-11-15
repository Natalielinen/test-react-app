
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    

    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, text: body}]
            } 
        
        default:
            return state;
    }
}
export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;