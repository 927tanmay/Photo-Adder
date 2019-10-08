import React from 'react';
import ReactDom from 'react-dom';
import Mains from './Components/Main';
import './style/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootreducer from './redux/postreducer';
import {Provider} from 'react-redux';
import App from './Components/app';

const store = createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const arr = ["Hello one","Hello two","Hello three"];

// const element = (
//     <h1>Ordered List</h1><ol>
   
//         {arr.map((task,index)=> <li key={index}>{task}</li>)}
// </ol>

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));