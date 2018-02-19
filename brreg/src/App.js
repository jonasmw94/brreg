import React, { Component } from 'react';
import './styles/App.css';
import Main from "./components/main/Main";

class App extends Component {
  render() {
    return (
        <div className='index'>
            <Main/>
        </div>
    );
  }
}

export default App;
