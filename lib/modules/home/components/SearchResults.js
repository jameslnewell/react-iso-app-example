import React from 'react';

export default class SearchResults extends React.Component {

  render() {
    return <div>
      <h1>Search Results</h1>
      <p>Found {this.props.length}</p>
      <ul>
      {this.props.results.map(function(result) {
        return <li key={result.id}>{result.charity}</li>;
      })}
      </ul>
    </div>;
  }

}

SearchResults.propTypes = {
  onSubmit: React.PropTypes.array
};


