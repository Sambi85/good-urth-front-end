import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react'
import NycMap from '../components/NycMap.js';

class ExploreContainer extends React.Component {

    render(){
        return (
            <>
             <NycMap/>
            </>
        )
    }
}

export default withRouter(ExploreContainer); 

