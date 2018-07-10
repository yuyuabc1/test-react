import React from 'react'
import { Link } from 'react-router-dom'
import Login from './../components/login'
import { Menu, Icon } from 'antd'
import '../style/welcome'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Welcome extends React.Component{
  state = {
    current: 'mail'
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render () {
    return (
      <div className="box">
        <div className="MenuBox">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <Link to="/dashboard">Navigation Four - Link</Link>
            </Menu.Item>
          </Menu>
          <div>
          <Login />
        </div>
        </div>
      </div>
    )
  }
}
