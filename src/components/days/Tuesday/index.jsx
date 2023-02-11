import React from 'react';
import s from './style.module.css';
import { CloseOutlined } from '@ant-design/icons';

export default function Tuesday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Tuesday')}>< CloseOutlined/></button>
        <div className={s.first}>
            <p>TUE</p>
        </div>
        <div className={s.second}>
          {
            findDay('Tuesday')
          }
        </div>
    </div>
  )
}