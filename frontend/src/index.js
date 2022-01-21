import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from "./Common/LoginPage/LoginPage";
import RegistrationPage from "./Common/RegistrationPage/RegistrationPage";


export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
); 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
