import React from 'react';

import style from './Login.module.scss'

function Login() {
  return (
    <div className={style.login}>
      <form className={style.form}>
        <h2>Simple Flight Check</h2>
        <label>Логин:</label><input type="text"></input>
        <label style={{ marginTop: '25px' }}>Пароль:</label><input type="text"></input>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;