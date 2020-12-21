import profileReducer, {addPost, deletePost} from "./profileReducer";
import {render} from "@testing-library/react";
import App from "../../App";
import React from "react";
import expect from "expect";

let state = {
    postData: [
        {id: 1, text: 'Hello, world!', likesCount: '15'},
        {id: 2, text: 'This is my first react app.', likesCount: '20'},
        {id: 3, text: 'I understood props!!!', likesCount: '200'},
    ]};

test('length of posts should be incremented', () => {

    let action = addPost("it-kamasutra");
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);

});

test('text of new post should be changed', () => {

    let action = addPost("it-kamasutra");
    let newState = profileReducer(state, action);

    expect(newState.postData[3].text).toBe("it-kamasutra");

});

test('after deleting length of messages should be decreased ', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2);

});
test(`after deleting length of messages shouldn't be changed if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(3);

});

