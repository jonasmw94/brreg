import React, { Component } from 'react';
import CompanyCard from "./CompanyCard";
import FocusedCard from "./FocusedCard";

class CardViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedCompany: null
        };

        this.removeFocus = this.removeFocus.bind(this);
        this.focusOnCompany = this.focusOnCompany.bind(this);

    }

    focusOnCompany(index){
        this.setState({
            focusedCompany: this.props.companies.data[index]
        });
    }

    removeFocus(){
        this.setState({
            focusedCompany: null
        });
    }

    render() {
        let newCompanies= [];
        const companies = this.props.companies.data;

        if(this.props.searchTerm.length > 2) {
            if(typeof companies === 'undefined') {
                return <div style={{'paddingLeft' : '10%'}} className={'search-view-main'}><p>Søket ga ingen resultater</p></div>;
            }
        }

        if(typeof companies === 'undefined'){
            return <div></div>;
        }

        if(this.state.focusedCompany !== null && this.state.focusedCompany !== 'undefined') {
            return <FocusedCard company={this.state.focusedCompany} removeFocus={() => this.removeFocus()} />
        }

        for(let i = 0; i < companies.length; i++) {
            newCompanies.push(<CompanyCard bedName={companies[i].navn} orgNr={companies[i].organisasjonsnummer}
                                           orgType={'Orgform: ' + companies[i].orgform.kode} amountOfEmployees={companies[i].antallAnsatte}
                                           maalform={companies[i].maalform} dateRegistered={companies[i].registreringsdatoEnhetsregisteret}
                                           colorLevel={companies[i].konkurs + companies[i].underAvvikling + companies[i].underTvangsavviklingEllerTvangsopplosning}
                                           focusOnCompany={this.focusOnCompany}
                                           arrNumber={i}
                                           key={i}
            />);
        }

        return (
            <div className='search-view-main'>
                {newCompanies}
            </div>
        );
    }
}

export default CardViewer;