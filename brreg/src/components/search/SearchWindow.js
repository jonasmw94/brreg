import React, { Component } from 'react';
import './SearchWindow.css';
import axios from 'axios';
import Spinner from "./Spinner";
import CardViewer from "./CardViewer";
import Search from 'react-icons/lib/md/search';


class SearchWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchResults: [],
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.fetchFirms = this.fetchFirms.bind(this);
    }

    componentDidMount() {
        this.searchInput.focus();
    }

    /* Handles changes from search input */
    handleChange(event){
        this.setState({
            searchTerm: event.target.value,
            searchResults: []
        });

        if(event.target.value.length > 2){
            this.fetchFirms(event.target.value);
        }
    }

    /* Fetches firms from brreg API, if length of searchTerm is long enough */
    fetchFirms(searchTerm){
        if(!(isNaN(searchTerm)) && searchTerm.length === 9) {
            this.setState({isLoading: true});
            axios
                .get('http://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=30&$filter=organisasjonsnummer+eq+%27' + searchTerm + '%27')
                .then(({data}) => {
                    this.setState({
                        searchResults: data
                    });
                    this.setState({isLoading: false});
                })
                .catch((err) => {
                });
        }else {
            this.setState({isLoading: true});
            axios
                .get('http://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=30&$filter=startswith(navn,%27' + searchTerm + '%27)')
                .then(({data}) => {
                    this.setState({
                        searchResults: data
                    });
                    this.setState({isLoading: false});
                })
                .catch((err) => {
                });
        }
    }

    /* Renders the whole search window */
    render() {
        return(
            <div className='index-search-main'>
                <div className='search-main-header'>
                    <div onClick={this.props.onSearchBtnClick} className="x"></div>
                    <div className="wrap">
                        <div className="search">
                            <input ref={(input) => { this.searchInput = input; }} type="text" value={this.state.searchTerm} onChange={this.handleChange} className="searchTerm" placeholder="Skriv inn bedriftsnavn / org nr" />
                            <button type="submit" className="searchButton">
                                <Search/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='search-main-content'>

                    {this.state.isLoading ?
                        (<Spinner />) : (<CardViewer searchTerm={this.state.searchTerm} companies={this.state.searchResults} />)
                    }

                </div>
            </div>
        );
    }
}

export default SearchWindow;