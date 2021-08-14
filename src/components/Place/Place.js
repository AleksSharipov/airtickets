import React from 'react';

import style from './Place.module.scss';

import arrow from '../../img/arrow.svg';

function Place({ obj }) {

  console.log(obj.Places)
  return (
    <div className={style.place}>
      <ul>
        <li>Вылеты</li>
        <li><img src={arrow} /></li>
        {
          // obj.Places.map((el) => {
          //   // console.log(el.IataCode)
          //   return <li key={el.PlaceId}>{el.IataCode}</li>
          // })
        }

      </ul>
    </div>
  )
}

export default Place;