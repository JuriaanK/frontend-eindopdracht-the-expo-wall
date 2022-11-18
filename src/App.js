import React, {useHistory, useState, useContext, useEffect} from "react";
import './App.css';
import {Switch, Route, Redirect ,Link } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Main from "./pages/Main";
import Login from "./pages/Login";
import Add from "./pages/Add";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import CreateUser from "./pages/CreateUser";
import CreateAdmin from "./pages/CreateAdmin";


function App() {

    const { isAuthenticated } = useContext(AuthContext);
  return (
      <>

      <Switch>
          <Route exact path="/">
              {isAuthenticated ? <Redirect to="/main"/> : <Login/>
              }
          </Route>
          <Route path="/main">
              {isAuthenticated === true &&
               <Main />}
          </Route>
          <Route path="/add">
              {isAuthenticated === true &&
              <Add />}
          </Route>
          <Route path="/profile">
              {isAuthenticated === true &&
             <Profile />}
          </Route>
          <Route path="/create">
              {isAuthenticated === false &&
              <CreateUser />}
          </Route>
          <Route path="/create-admin">
              {isAuthenticated === true &&
                  <CreateAdmin />}
          </Route>
          <Route path="/settings">
              {isAuthenticated === true &&
              <Settings />}
          </Route>
      </Switch>
      </>
  );
}

export default App;
