import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status should be in the state", () => {
        const component = create(<ProfileStatus status = "blabla" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("blabla");
    });

    test("span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status = "blabla" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("text should be correct", () => {
        const component = create(<ProfileStatus status = 'blabla' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('blabla');
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status = 'blabla' />);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("input should be displayed in the editMode instead of the span", () => {
        const component = create(<ProfileStatus status = 'blabla' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('blabla');
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status = 'blabla'
          updateStatus ={mockCallBack} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});

