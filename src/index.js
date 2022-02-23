import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from './components/NotFound';
import ListeAvis from './components/ListeAvis';
import RemplirAvis from './components/RemplirAvis';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/remplir" component={RemplirAvis}/> 
        <Route exact path="/liste" component={ListeAvis}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
