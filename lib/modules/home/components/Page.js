import React from 'react';

import Layout from '../../../components/Layout';
import GoogleMap from '../../../components/GoogleMap';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

var results = [
  {id: 1, charity: 'St Vincent De Pauls'},
  {id: 2, charity: 'Salvation Army'}
];

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      results:  [],
      searched: false
    };
  }

  handleSubmit(query) {
    this.setState({
      results:  results,
      searched: true
    });
  }

  render() {

    return <body>
      <Layout>
        <br/>
        <SearchForm onSubmit={this.handleSubmit.bind(this)}/>
        <br/>
        {(this.state.searched ?
        <div>
          <GoogleMap/>
          <SearchResults results={this.state.results}/>
        </div> : null)}
      </Layout>
    </body>;
  }

}
