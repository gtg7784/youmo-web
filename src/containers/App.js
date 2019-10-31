import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import axios from 'axios'

import './App.scss';

import Header from '../components/Header/Header'

import Main from './Main/Main';
import Photo from './Photo/Photo';
import Video from './Video/Video';
import Mypage from './Mypage/Mypage';
import How from './How/How';
import Login from './Login/Login';
import Register from './Register/Register';

class App extends React.Component {
  constructor(props) {
      super(props);
      axios.defaults.baseURL = 'http://ec2-3-132-214-132.us-east-2.compute.amazonaws.com/api';
      axios.defaults.timeout = 10000;
      axios.defaults.headers.common['Accept'] = '*/*';
  }
  render(){
    if(sessionStorage.length === 0){
        return(
          <div className="App">
            {
              window.location.pathname === '/photo' ||
              window.location.pathname === '/video' ||
              window.location.pathname === '/mypage' 
                ? alert('로그인 후 서비스를 이용해주세요') & window.location.replace('/')
                : null
              }
            <Header/> 
            <Switch>
              <Route path='/' exact component={Main}/>
              <Route path='/login' exact component={Login}/>
              <Route path='/register' exact component={Register}/>
              <Route path='/how-to-use' exact component={How}/>
            </Switch>
          </div>
        )
    } else {
        return(
          <div className="App">
            <Header/> 
            <Switch>
              <Route path='/photo' exact component={Photo}/>
              <Route path='/video' exact component={Video}/>
              <Route path='/mypage' exact component={Mypage}/>
              <Route path='/' exact component={Main}/>
              <Route path='/register' exact component={Register}/>
              <Route path='/how-to-use' exact component={How}/>
            </Switch>
          </div>
        )
    }
  }
}

export default withRouter(App);
