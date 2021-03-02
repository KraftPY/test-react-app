import React from 'react'
import {  Menu } from 'antd'
import { useHistory } from 'react-router-dom'

const menu = [
  { name: 'Reports', path: '/'},
  { name: 'Saved reports', path: '/saved-reports'},
  { name: 'Create report', path: '/create-report'},
]

function Navbar() {
  const history = useHistory()

  function eventClick({ key }) {
    const { path } = menu[key - 1]
    history.push(path)
  }

  return (
    <Menu 
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      onClick={eventClick}
      style={{ paddingLeft: '10%' }}
    >
      { menu.map( ({name }, i) => {
          return (
              <Menu.Item key={i + 1}>{ name }</Menu.Item>
          )
      })}
    </Menu>
  )
}

export default Navbar