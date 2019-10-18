import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import AppContext from './components/AppContext'
import ResultsList from './components/ResultsList';
import SearchForm from './components/SearchForm';
import ErrorPage from './components/ErrorPage'
import {Link} from 'react-router-dom'
import {Router} from 'react-router-dom'

class App extends React.Component {
  state = {
    results: [],
    loading: false,
    error: null
  }

  handleSearch = (keyword, searchType) => {
    this.setState({loading: true})
    fetch(`https://swapi.co/api/${searchType}/?search=${keyword}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then(data => {
        this.setState({
          results: data.results,
          loading: false
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {

    const value = {
      results: this.state.results,
      handleSearch: this.handleSearch
    }

    const notifyError = <div>{this.state.error}</div>
    const loading = <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

  return (
    <AppContext.Provider value={value}>
    <ErrorPage>
    <div className="App">
      <Link to={'/'}><header><h1>Star Wars Search</h1></header></Link>
      <SearchForm history={this.props.history}/>
      {this.state.error ? notifyError : ''}
      <div className="resultslist">
        {this.state.loading && !this.state.error ? loading : <Route path="/results" component={ResultsList} />}
      </div>
    </div>
    </ErrorPage>
    </AppContext.Provider>
  )
  }
}

export default App;
