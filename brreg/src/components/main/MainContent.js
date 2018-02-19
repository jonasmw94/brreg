import React, { Component } from 'react';
import './MainContent.css';
import Landing from "./Landing";

class MainContent extends Component {

    render() {
        return(
            <div className='index-main-content'>
                <Landing onSearchBtnClick={this.props.onSearchBtnClick} />
            </div>
        );
    }
}

export default MainContent;