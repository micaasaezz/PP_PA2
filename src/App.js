import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/templates/NotFound';
import Detalle from './components/pages/Detalle';
import Listado from './components/pages/Listado';
import Spinner from './components/atoms/Spinner';
import Title from './components/atoms/Title';


function App() {
  const { app, poke } = useSelector(state => state);
  const { appName, loading, error, errorMsg } = app;
  
  return (
    <div>
      {/* <h2>{appName}</h2> */}
      { loading && <Spinner />}
      { error && <Title title={errorMsg} className={"not-found-error"}/>}
      <Switch> 
        <Route exact path="/">
          <Redirect from="/" to="/listado" />
        </Route>
        <Route path="/listado">
          <Listado />
        </Route>
        <Route path="/detalle/:id">
          <Detalle />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect from="*" to="/not-found" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
