import React from 'react'
import { Layout, Breadcrumb, Input, Icon } from 'antd'
import '../style/login.css'


const { Content } = Layout

export default class Login extends React.Component{
    render () {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Input placeholder="请输入用户名" className="InputBox"/>
                    <Input placeholder="请输入密码" className="InputBox"/>
                </div>
          </Content>
        )
    }
}
