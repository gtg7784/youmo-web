import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

class Header extends React.Component{
  render(){
    return(
      <header>
        <h2>YOUMO</h2>
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
        </ul>
      </header>
    )
  }
}

export default Header;