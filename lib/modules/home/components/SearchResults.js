import React from 'react';
import GoogleMap from 'google-map-react';

export default class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {
      zoom:   9,
      center: [59.938043, 30.337157]
    };
  }

  render() {
    return <div>
      <div style={{height: '30em'}}>
        <GoogleMap {...this.state}>
          <div lat={59.997413} lng={30.339944}>
            Hello Russia!
          </div>
        </GoogleMap>
      </div>
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


