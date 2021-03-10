import React, { FC } from 'react'
import { Pagination } from 'antd';

interface IPagProps {
  total: number,
  current: number,
  changeCurrent(val: number): void
}


 const Pag:FC<IPagProps> = ({ total, current, changeCurrent }) => {
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

export default Pag