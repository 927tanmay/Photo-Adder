import React from 'react';
import ReactDom from 'react-dom';
import Mains from './Components/Main';
import './style/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';


// const arr = ["Hello one","Hello two","Hello three"];

// const element = (
//     <h1>Ordered List</h1><ol>
   
//         {arr.map((task,index)=> <li key={index}>{task}</li>)}
// </ol>

ReactDom.render(<BrowserRouter><Mains/></BrowserRouter>,document.getElementById('root'));