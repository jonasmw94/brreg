import React, { Component } from 'react';
import './CompanyCard.css';

class CompanyCard extends Component {

    getColor(number) {
        let charArr = number.split('');
        if(charArr[0] === 'J') {
            return '#ff4845'
        }else {
            if(charArr[1] === 'J' || charArr[2] === 'J') {
                return '#ffde8c'
            }else {
                return '#93D083'
            }
        }
    }

    render() {
        return(
            <div className='search-card'>
                <div className='search-card-header'>
                    <div style={{backgroundColor: this.getColor(this.props.colorLevel)}} className='card-header-logo'>

                    </div>

                    <div className='card-header-company'>
                        <div className='header-company-name'>
                            <h4>{this.props.bedName}</h4>
                        </div>
                    </div>
                </div>

                <div className='search-card-info'>
                    <div className='card-info-left'>
                        <div className='card-info-row1'>
                            {this.props.orgType}
                        </div>
                        {('J' === this.props.colorLevel.split('')[0]) ?
                            (<div className='card-info-row2'>Status: Konkurs</div>) : (('J' === this.props.colorLevel.split('')[1]) ?
                                (<div className='card-info-row2'>Status: Under avvikling</div>) : (('J' === this.props.colorLevel.split('')[2]) ?
                                    (<div className='card-info-row2'>Status: Under tvangsavvikling</div>) : (<div>Status: I drift</div>)))
                        }
                    </div>
                    <div className='card-info-right'>
                        <div className='card-info-row1'>
                            {'Regnr: ' + this.props.orgNr}
                        </div>
                        <div className='card-info-row2'>
                            {'Siden: ' + this.props.dateRegistered}
                        </div>
                    </div>
                </div>

                <div onClick={() => this.props.focusOnCompany(this.props.arrNumber)} className='search-card-utility'>
                    Trykk for å utvide
                </div>
            </div>
        );
    }
}

export default CompanyCard;