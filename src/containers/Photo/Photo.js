import React from 'react'
import axios from 'axios'
import FileDownload from 'js-file-download'
import * as classNames from 'classnames/bind'

import styles from './Photo.scss'

const cx = classNames.bind(styles)

class Photo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }

    this.onPlus = this.onPlus.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount(){
    axios.get('/image/', {
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
    window.location.replace = '/photo/add'
  }

  onClick = (index, id) => {
    index += 1;
    axios({
      url:
        "http://ec2-3-132-214-132.us-east-2.compute.amazonaws.com/api/image/" +
        index,
      method: "GET",
      responseType: "blob" // important
    })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      const image = this.state.data[index + 1].image;
      const type = image.split(".")[image.split.length - 1];
      link.setAttribute("download", `${id}-${index + 1}.${type}`);
      document.body.appendChild(link);
      link.click();
    });
  };

  render(){
    return(
      <div className={cx('Photo')}>
        <div onClick={() => this.onPlus()}>
          <div>
            <h1>+</h1>
          </div>
          <div>
            <h3>영상 추가하기</h3>
          </div>
        </div>
        {
          this.state.data.map((item, index) => (
            <div key={index} onClick={() => this.onClick(index, item.writer)} >
                <div style={{'background': `url(http://ec2-3-132-214-132.us-east-2.compute.amazonaws.com/api/image/${index})`}}/>
                <div>
                  <h3>{`${item.writer}-${item.id}`}</h3>
                </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Photo;