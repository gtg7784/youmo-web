import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import * as classNames from 'classnames/bind' 

import styles from './Login.scss'

const cx = classNames.bind(styles)

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      pw: ''
    }

    this.onChangeId = this.onChangeId.bind(this)
    this.onChangePw = this.onChangePw.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  onChangeId = (e) => {
    this.setState({
      id: e.target.value
    })
  }

  onChangePw = (e) => {
    this.setState({
      pw: e.target.value
    })
  }

  onLogin = async () => {
    let form = new FormData()
    form.append('username', this.state.id)
    form.append('password', this.state.pw)

    await axios.post('/signin/', form)
    .catch(err => {
      console.log(err.response.data);
      alert('아이디 또는 비밀번호가 잘못되었습니다.')
    })
    .then(res => {
      console.log(res)
      if(res && res.status === 200){
        sessionStorage.setItem(
          "userInfo",
          JSON.stringify({
            username: this.state.id,
            password: this.state.pw,
            token: res.data.token
          })
        )
        window.location.replace('/')
      }
    })
  }

  render(){
    return(
      <div className={cx('Login')}>
        <div>
          <h1>YOUMO</h1>
          <input type="text" placeholder='ID' onChange={(e) => this.onChangeId(e)}/>
          <input type="password" placeholder='PW' onChange={(e) => this.onChangePw(e)}/>

          <button onClick={() => this.onLogin()}>Login</button>
          <div>
            Don't have an account?{' '}
          <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;