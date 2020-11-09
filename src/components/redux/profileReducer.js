import {usersAPI} from './../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, text: 'Hello, world!', likesCount: '15'},
        {id: 2, text: 'This is my first react app.', likesCount: '20'},
        {id: 3, text: 'I understood props!!!', likesCount: '200'},
    ],
    newPostText: 'it-kamasurta',
    profile: null
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

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
            
        default:
            return state;
    }
    ;
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const getUserProfile = (userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        }); 
    
}
}

export default profileReducer;