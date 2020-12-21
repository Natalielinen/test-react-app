
import {render} from "@testing-library/react";
import App from "../../App";
import React from "react";
import expect from "expect";
import dialogsReducer, {sendMessage} from "./dialogsReducer";

let state = {
    messagesData: [
        {id: 1, text: 'Мяу!!!'},
        {id: 2, text: 'Гав-гав!!!'},
        {id: 3, text: '*звуки улитки*'}
    ]
}

test('length of messages should be incremented', () => {

    let action = sendMessage("it-kamasutra");
    let newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(4);

});



