import React from 'react'
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './Video.scss'

const cx = classNames.bind(styles)

class Video extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }

    this.onPlus = this.onPlus.bind(this)
  }

  componentDidMount(){
    axios.get('/video/', {
      headers: {
        'Authorization': "Token " + JSON.parse(sessionStorage.userInfo).token
      }
    })
    .then(res => {
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  onPlus = () => {
    window.location.href = '/video/add'
  }

  render(){
    return(
      <div className={cx('Video')}>
        <div onClick={() => this.onPlus()} className={cx('plus')}>
          <div>
            <h1>+</h1>
          </div>
          <div>
            <h3>영상 추가하기</h3>
          </div>
        </div>
        {
          this.state.data.map((item, index) => (
            <div>
                <div>
                  <video src={`http://ec2-3-132-214-132.us-east-2.compute.amazonaws.com/api/image/${item.id}`}></video>
                </div>
                <div>

                </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Video;