import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer/index';

import TodoContainer from './components/TodoContainer/TodoContainer';

import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TodoContainer />
      </header>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
