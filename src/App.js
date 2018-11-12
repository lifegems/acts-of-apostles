import React, { Component } from 'react';
import './App.css';
import * as json from './timelines/acts-of-apostles';
var TL = window.TL;

class App extends Component {
  timeline = {};

  componentDidMount() {
    console.log(json.default);
    this.timeline = new TL.Timeline('timeline', json.default);
  }

  render() {
    return (
      <div>
        <div id='timeline' className='timeline'></div>
      </div>
    );
  }
}

export default App;
