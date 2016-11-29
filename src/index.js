import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App name="ToDo" tasks={['Call Grandma','Roommate meeting','Return Rachel\'s book', 'Wash dishes','Hang up laundry','Clean bathroom']} />,
  document.getElementById('root')
);
