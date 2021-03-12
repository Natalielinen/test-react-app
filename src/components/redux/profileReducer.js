import {usersAPI, profileAPI} from './../../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData: [
        {id: 1, text: 'Hello, world!', likesCount: '15'},
        {id: 2, text: 'This is my first react app.', likesCount: '20'},
        {id: 3, text: 'I understood props!!!', likesCount: '200'},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

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

        case SET_STATUS:
            return {...state, status: action.status}

        case DELETE_POST:
            return {...state, postData: state.postData.filter(p => p.id != action.postId)};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
    ;
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;