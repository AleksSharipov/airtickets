import React from 'react';

import style from './Logout.module.scss';
import logout from '../../img/logout.svg'

function Logout() {
  return (
    <div className={style.logout}>
      <button>Выйти <img src={logout} /></button>
    </div>
  )
}

export default Logout;