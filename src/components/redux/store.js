import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, text: 'Hello, world!', likesCount: '15'},
                {id: 2, text: 'This is my first react app.', likesCount: '20'},
                {id: 3, text: 'I understood props!!!', likesCount: '200'},
            ],
            newPostText: 'it-kamasurta'
        },
        dialogsPage: {
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
            newMessageBody:'',
            sidebar: [
                {id: 1, name: 'Гарик'},
                {id: 3, name: 'Белка'},
                {id: 5, name: 'Василий'}
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Гарик",
                    img: "https://cache3.youla.io/files/images/780_780/5b/fb/5bfba5e45eaa9e41107f0045.jpg"
                },
                {
                    id: 2,
                    name: "Белка",
                    img: "https://sun9-35.userapi.com/c849220/v849220200/14151b/qJ2hcpXCH4k.jpg?ava=1"
                },
                {id: 3, name: "Василий", img: "https://pona1.ru/storage/items/48857ff41b25099018d6b1c2dbcbf37a_200.jpg"}
            ]
        }

    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};



export default store;

window.store = store;