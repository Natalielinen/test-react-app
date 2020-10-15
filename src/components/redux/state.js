
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
            sidebar: [
                {id: 1, name: 'Гарик'},
                {id: 3, name: 'Белка'},
                {id: 5, name: 'Василий'}
            ]
        },
        sidebar: {
            friends: [
                {id:1, name:"Гарик", img: "https://cache3.youla.io/files/images/780_780/5b/fb/5bfba5e45eaa9e41107f0045.jpg" },
                {id:2, name:"Белка", img: "https://sun9-35.userapi.com/c849220/v849220200/14151b/qJ2hcpXCH4k.jpg?ava=1" },
                {id:3, name:"Василий", img: "https://pona1.ru/storage/items/48857ff41b25099018d6b1c2dbcbf37a_200.jpg" }
            ]
        }

    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('State was changed');
    },
    addPost(){
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: '2'

        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText= '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(userMessage){
        let newMessage = {
            id: 5,
            text: userMessage
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;

    }
};

export default store;

window.store = store;