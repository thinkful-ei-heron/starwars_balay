import React from 'react' 
import AppContext from './AppContext'
import {withRouter} from 'react-router-dom'
import '../styles/SearchForm.css'

class SearchForm extends React.Component {
    static contextType = AppContext;

    state = {
        keyword: '',
        searchType: null,
        keywordTouched: false,
        searchTypeTouched: false
    }

    submitSearch = (e) => {
        e.preventDefault()
        this.context.handleSearch(this.state.keyword, this.state.searchType)
        this.setState({
            keyword: '',
            searchType: '', 
            keywordTouched: false
        })
        this.props.history.push('/results')
    }

    keyword = (str) => {
        this.setState({
            keyword: str,
            keywordTouched: true
        })
    }

    searchType = (str) => {
        this.setState({
            searchType: str
        })
    }

    validateKeyword = () => this.state.keyword.trim() === '' ? 'Please enter a keyword' : undefined;

    render() {
        return (
            <form className="searchform" onSubmit={this.submitSearch}>
                <label htmlFor="searchterm">Keyword: {this.state.keywordTouched && <span>{this.validateKeyword()}</span>}</label>
                <input type="text" name="searchterm" value={this.state.keyword} placeholder="Enter Keyword" onChange={e => this.keyword(e.target.value)} required></input>                
                <label htmlFor="searchfor">Search for:</label>
                <select name="searchfor" value={this.state.searchType ? this.state.searchType : ''} onChange={e => this.searchType(e.target.value)} required>
                    <option value="" selected disabled>Select an option...</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <button type="submit">Search!</button>
            </form>
        )
    }
}

export default withRouter(SearchForm)