import React from 'react'
import AppContext from './AppContext'

class Result extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            this.context.results.map((itm, index) => {
                return (
                    <li key={index}>
                        <h3>{itm.name ? itm.name : itm.title}</h3>
                    </li>
                )
            })
        )
    }
}

export default Result