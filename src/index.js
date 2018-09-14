import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducer'
import thunk from 'redux-thunk'


const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
