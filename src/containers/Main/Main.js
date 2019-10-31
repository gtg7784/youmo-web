import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind' 

import styles from './Main.scss'

import share from '../../assets/images/share.svg'

const cx = classNames.bind(styles)

class Main extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className={cx('Main')}>
          <div>
            <div>
              <p>Censorship</p>
              <p>with A.I</p>
              <div>
                <Link to='/login'>USE NOW !</Link>
                <Link to='/how-to-use'>HOW TO USE ?</Link>
              </div>
            </div>
            <img src={share} alt=""/>
          </div>
        </div>
        <footer>
          <div/>
          <div>© YOUMO, All rights reserved</div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Main;