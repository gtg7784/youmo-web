import React from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './AddVideo.scss'

const cx = classNames.bind(styles)

class AddPhoto extends React.Component{
  render(){
    return(
      <div className={cx('AddPhoto')}>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
        <button>Upload</button>
      </div>
    )
  }
}

export default AddPhoto;