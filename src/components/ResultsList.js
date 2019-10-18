import React from 'react'
import Result from './Result'
import AppContext from './AppContext'
import '../styles/ResultsList.css'

class ResultsList extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <ul>
                {this.context.results.length > 0 ? <Result /> : <h3>No results found!</h3>} 
            </ul>
        )
    }
}

export default ResultsList