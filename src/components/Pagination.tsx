import React from 'react'
import { Pagination } from 'antd';

type PagProps = {
  total: number,
  current: number,
  changeCurrent(val: number): void
}


export default function Pag({ total, current, changeCurrent }: PagProps) {
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
