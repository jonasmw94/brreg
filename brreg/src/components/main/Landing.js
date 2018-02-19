import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {

    render() {
        return (
            <div className='main-content-landingcard'>
                <div className='main-content-landingcard-title'>
                    <h3>SØK I BRØNNØYSUNDREGISTERET</h3>
                </div>

                <div className='main-content-landingcard-paragraph'>
                    <p>
                        Velkommen til brønnøysundregisteret. Trykk på knappen nedenfor for å søke.
                    </p>
                </div>

                <div className='main-content-landingcard-button'>
                    <button onClick={this.props.onSearchBtnClick}>SØK NÅ</button>
                </div>
            </div>
        );
    }
}

export default Landing;