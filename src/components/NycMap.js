// google map api key = AIzaSyBo2wf41ArKIsEEZilaEiEWt0sMKboP0xg
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: 'auto',
    height: '500px',
  };

class NycMap extends React.Component {

render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBo2wf41ArKIsEEZilaEiEWt0sMKboP0xg'
  })(NycMap);