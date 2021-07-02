import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

Object.defineProperty(window,"localStorage",{
  value:{
      getItem:jest.fn().mockReturnValue(JSON.stringify()),
  },
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
