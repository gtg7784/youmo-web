import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../components/Header/Header'

import Main from './Main/Main';
import Photo from './Photo/Photo';
import Video from './Video/Video';
import Mypage from './Mypage/Mypage';

import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/photo' exact component={Photo}/>
          <Route path='/video' exact component={Video}/>
          <Route path='/mypage' exact component={Mypage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
