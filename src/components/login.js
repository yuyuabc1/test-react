import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Breadcrumb, Input, Icon, Button } from 'antd'
import '../style/login.css'


const { Content } = Layout

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userName: '',
          passWord: ''
        };
      }
    
      emitEmpty = (e) => {
        this.setState({ userName: '' });
      }

      emitEmpty2 = (e) => {
        this.setState({ passWord: '' });
      }
    
      changeValue = (e) => {
        const name = e.target.name
        this.setState({ [name]: e.target.value });
      }

    render () {
        const { userName, passWord } = this.state
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffix2 = passWord ? <Icon type="close-circle" onClick={this.emitEmpty2} /> : null;
        const userPrefix = <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        const passPrefix = <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
        // const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <form className="enterBox">
                    <div>{this.props.name}</div>
                    <Input placeholder="请输入用户名" value={userName} name="userName" className="InputBox" onChange={this.changeValue} prefix={userPrefix} suffix={suffix}/>
                    <Input placeholder="请输入密码" value={passWord} name="passWord" className="InputBox" prefix={passPrefix} onChange={this.changeValue} suffix={suffix2}/>
                    <Link to="main/option1"><Button type="primary">登陆</Button></Link>
                </form>
                {/* <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                /> */}
          </Content>
        )
    }
}
