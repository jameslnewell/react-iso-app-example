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
    return <div style={{height: '72.5vh'}}>
      <GoogleMap {...this.state}>
        <div className="bin-marker" lat={59.997413} lng={30.339944}>
          Hello Russia!
        </div>
      </GoogleMap>
    </div>;
  }

}

SearchResults.propTypes = {
  onSubmit: React.PropTypes.array
};


