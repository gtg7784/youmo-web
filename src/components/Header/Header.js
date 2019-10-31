import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

class Header extends React.Component{
  constructor(props){
    super(props)

    this.onLogout = this.onLogout.bind(this)
  }

  onLogout = () => {
    sessionStorage.clear()
    alert('로그아웃 되었습니다.')
    window.location.replace('/')
  }
  render(){
    return(
      <header>
        <h2>
          <Link to='/'>YOUMO</Link>
        </h2>
        <ul>
          <li>
            <Link to='/'>메인</Link>
          </li>
          <li>
            <Link to='/video'>동영상</Link>
          </li>
          <li>
            <Link to='photo'>사진</Link>
          </li>
          <li>
            <Link to='/mypage'>마이페이지</Link>
          </li>
          <li>
            {
              sessionStorage.length === 0
              ? <Link to='/login'>로그인</Link>
              : <Link to='/' onClick={() => this.onLogout()}>로그아웃</Link>
            }
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;