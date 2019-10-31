import React from 'react'
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './Register.scss'

const cx = classNames.bind(styles)

class Register extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: '',
      pw: '',
      pw_check: '',
      email: ''
    }

    this.onChangeId = this.onChangeId.bind(this)
    this.onChangePw = this.onChangePw.bind(this)
    this.onChangePwCheck = this.onChangePwCheck.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onRegister = this.onRegister.bind(this)
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

  onChangePwCheck = (e) => {
    this.setState({
      pw_check: e.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onRegister = async () => {
    let form = new FormData()
    form.append('email', this.state.email)
    form.append('username', this.state.id)
    form.append('password1', this.state.pw)
    form.append('password2', this.state.pw_check)

    await axios.post('/signup/', form)
    .catch(err => {
      console.log(err.response);
      if(JSON.stringify(err.response.data.username) === '["해당 사용자 이름은 이미 존재합니다."]'){
        alert('해당 사용자 이름은 이미 존재합니다.')
      } else if(JSON.stringify(err.response.data.password2) === '["비밀번호가 일치하지 않습니다."]'){
        alert('비밀번호가 일치하지 않습니다.')
      }
    })
    .then(res => {
      console.log(res)
      if(res && res.status === 201){
        alert('회원가입이 완료되었습니다.')
        window.location.replace('/login')
      }
    })
  }

  render(){
    return(
      <div className={cx('Register')}>
        <div>
          <label htmlFor="id">ID</label>
          <input type="text" placeholder='ID' onChange={(e) => this.onChangeId(e)}/>
        </div>
        <div>
          <label htmlFor="id">Password</label>
          <input type="password" placeholder='Password' onChange={(e) => this.onChangePw(e)}/>
        </div>
        <div>
          <label htmlFor="id">Password Check</label>
          <input type="password" placeholder='Password Check' onChange={(e) => this.onChangePwCheck(e)}/>
        </div>
        <div>
          <label htmlFor="id">E-Mail</label>
          <input type="email" placeholder='Email' onChange={(e) => this.onChangeEmail(e)}/>
        </div>
        <button onClick={() => this.onRegister()}>Register</button>
      </div>
    )
  }
}

export default Register;