import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Main from '../Main/Main';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import style from './App.module.scss';

import { getFlight } from '../../api/api';

function App() {

  const [date, setDate] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getFlight()
      .then((res) => {
        // console.log(res)
        setDate(res)
      })
      .catch((err) => {
        console.log(err)
      })


  }, [])



  return (

    <div className={style.app}>
      <Switch>
        <Route path="/flights">
          <Main obj={date} />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route>
          {isLoggedIn ? <Redirect to="/flights" /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
      {/* <Login /> */}

    </div>
  );
}

export default App;
