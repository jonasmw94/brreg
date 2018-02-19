/* -- React and components -- */
import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MainContent from "./MainContent";
import SearchWindow from '../search/SearchWindow';

/* -- CSS -- */
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {searchWindowEnabled: false};
        this.showSearchWindowStateChange.bind(this);
    }

    showSearchWindowStateChange() {
        this.setState({
            searchWindowEnabled: !this.state.searchWindowEnabled
        });
    }

    render() {
        return(
            <div className='index-main'>
                <Navbar/>
                {this.state.searchWindowEnabled ?
                    (<SearchWindow onSearchBtnClick={() => this.showSearchWindowStateChange()} />) :
                    (<MainContent onSearchBtnClick={() => this.showSearchWindowStateChange()} />)
                }
            </div>
        );
    }
}

export default Main;