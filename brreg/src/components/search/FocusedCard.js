import React, { Component } from 'react';
import './FocusedCard.css';

class FocusedCard extends Component {

    render() {

        let status= '';
        if(this.props.company.konkurs === 'J') status = 'Konkurs';
        else if(this.props.company.underAvvikling === 'J' || this.props.company.underTvangsavviklingEllerTvangsopplosning === 'J') status = 'Under avvikling';
        else status = 'I drift';

        return(
            <div className='view-focused'>
                <div className='view-focused-exit' onClick={this.props.removeFocus}>
                    {'<-'}
                </div>
                <div className='view-focused-header'>
                    <div className='focused-header-companyname'>
                        <h2>{this.props.company.navn}</h2>
                    </div>

                    <div className='focused-header-orgnr'>
                        {this.props.company.organisasjonsnummer}
                    </div>
                </div>

                <div className='view-focused-content'>
                    <div className='focused-content'>
                        <div className='focused-content-col1'>
                            <p>Organisasjonsform: </p>
                            <p>Antall ansatte: </p>
                            <p>Siden: </p>
                            <p>Målform: </p>
                            <p>Beskrivelse: </p>
                        </div>
                        <div className='focused-content-col2'>
                            <p>{' ' +this.props.company.orgform.kode}</p>
                            <p>{' ' + this.props.company.antallAnsatte}</p>
                            <p>{' ' + this.props.company.registreringsdatoEnhetsregisteret}</p>
                            <p>{' ' + this.props.company.maalform}</p>
                            <p>{' ' + this.props.company.naeringskode1.beskrivelse}</p>
                        </div>
                    </div>

                    <div className='focused-content'>
                        <div className='focused-content-col1'>
                            <p>Sted: </p>
                        </div>
                        <div className='focused-content-col2'>
                            <p>{this.props.company.forretningsadresse.land}</p>
                            <p>{this.props.company.forretningsadresse.postnummer}</p>
                            <p>{this.props.company.forretningsadresse.poststed}</p>
                            <p>{this.props.company.forretningsadresse.kommune}</p>
                            <p>{this.props.company.forretningsadresse.adresse}</p>
                        </div>
                    </div>
                </div>

                <div className='view-focused-footer'>
                        Firmastatus: {' ' + status}
                </div>
            </div>
        );
    }
}

export default FocusedCard;