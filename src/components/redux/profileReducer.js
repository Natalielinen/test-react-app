import {usersAPI, profileAPI} from './../../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, text: 'Hello, world!', likesCount: '15'},
        {id: 2, text: 'This is my first react app.', likesCount: '20'},
        {id: 3, text: 'I understood props!!!', likesCount: '200'},
    ],
    newPostText: 'it-kamasurta',
    profile: null,
    status: ''
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
                text: action.newPostText,
                likesCount: '2'
            };
            
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
            case SET_STATUS:{
                return {...state, status: action.status}
            }
        

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
            
        default:
            return state;
    }
    ;
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => {
    return (dispatch) =>{
        usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        }); 
    
}
}

export const getStatus = (userId) => {
    return (dispatch) =>{
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        }); 
    
}
}

export const updateStatus = (status) => {
    return (dispatch) =>{
        profileAPI.updateStatus(status)
        
        .then(response => {
            if(response.data.resultCode === 0){
            dispatch(setStatus(status));
            }
        }); 
    
}
}



export default profileReducer;