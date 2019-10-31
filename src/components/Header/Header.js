import React from 'react'

import './Header.scss'

class Header extends React.Component{
  render(){
    return(
      <header>
        <h2>YOUMO</h2>
        <ul>
          <li>메인</li>
          <li>동영상</li>
          <li>사진</li>
          <li>마이페이지</li>
        </ul>
      </header>
    )
  }
}

export default Header;