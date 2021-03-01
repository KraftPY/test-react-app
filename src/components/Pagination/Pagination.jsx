import React from 'react'
import { Pagination } from 'antd';

export default function Pag({ total, current, changeCurrent }) {
  return (
    <Pagination 
      style={{ marginTop: '2rem', textAlign: 'center'}}
      current={ current }
      onChange={ changeCurrent }
      total={ total }
      defaultPageSize={5}
      showSizeChanger={false}
    />)
}
