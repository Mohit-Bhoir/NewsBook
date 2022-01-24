import './App.css';

import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
 pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API
 state = {
  progress:0
}

setProgress = (progress) =>{
  this.setState({progress:progress})
} 

  render() {
    return(
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
        />
          <Routes>
          <Route exact path="NewsBook/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route exact path="NewsBook/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={this.pageSize} country="in" category="Business"/>}/>
          <Route exact path="NewsBook/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
          <Route exact path="NewsBook/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
          <Route exact path="NewsBook/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>
          <Route exact path="NewsBook/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}/>
          <Route exact path="NewsBook/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
          </Routes>
        
        </Router>
      </div>
      )
  }
}
