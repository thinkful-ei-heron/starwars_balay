import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchForm from './components/SearchForm';
import {MemoryRouter} from 'react-router-dom'
import ResultsList from './components/ResultsList'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SearchForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><SearchForm /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders ResultsList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResultsList results={[{}]}/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})





