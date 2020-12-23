// google map api key = AIzaSyBo2wf41ArKIsEEZilaEiEWt0sMKboP0xg
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    
  style: {
      width: '100%',
      height: '500px',
      
    },
    
  center: {
      lat: 	40.730610,
      lng: 	-73.935242
    }
  };

class NycMap extends React.Component {

  render() {
      return (
         <div id="map" height="500px"> 
           <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles.style}
            initialCenter={mapStyles.center}
          />
       </div>   
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBo2wf41ArKIsEEZilaEiEWt0sMKboP0xg'
  })(NycMap);