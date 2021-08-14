import React from 'react';
import Logout from '../Logout/Logout';
import TimeTable from '../TimeTable/TimeTable';

import style from './Main.module.scss';

function Main({ obj }) {
  // console.log(obj)
  return (
    <div className={style.main}>
      <Logout />
      <TimeTable obj={obj} />
    </div>
  )
}

export default Main;