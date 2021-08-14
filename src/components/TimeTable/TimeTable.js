import React from 'react';
import Place from '../Place/Place';

import style from './TimeTable.module.scss';

function TimeTable({ obj }) {
  return (
    <section className={style.table}>
      <div>
        <Place obj={obj} />
      </div>

    </section>
  )
}

export default TimeTable;