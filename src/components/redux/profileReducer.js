const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, text: 'Hello, world!', likesCount: '15'},
        {id: 2, text: 'This is my first react app.', likesCount: '20'},
        {id: 3, text: 'I understood props!!!', likesCount: '200'},
    ],
    newPostText: 'it-kamasurta'
}

const profileReducer = (state=initialState, action) => {

    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };
    

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: '2'
            };
            
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
    ;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;