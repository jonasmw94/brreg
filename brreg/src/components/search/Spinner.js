import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }
}

export default Spinner;