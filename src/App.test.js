import React from 'react';
import {SamuraiJSApp} from './App';
import ReactDOM from 'react-dom';

test('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />);
  ReactDOM.unmountComponentAtNode(div);
});
