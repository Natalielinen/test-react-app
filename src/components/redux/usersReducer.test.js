
import {render} from "@testing-library/react";
import App from "../../App";
import React from "react";
import expect from "expect";




test('user should be followed', () => {

    let action = followSuccess(10);
    let newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(4);

});



