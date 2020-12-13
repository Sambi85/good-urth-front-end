import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import NycMap from '../components/NycMap.js';
import MarketList from '../lists/MarketList.js';

class ExploreContainer extends React.Component {
    
    render(){
        return (
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        
                        {/* <NycMap/> */}

                        <div align='center'><Image src='https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314' size='Huge'/></div>
                   
                    </Grid.Column>
                        
                    <MarketList/> 
                
                </Grid.Row>
            </Grid>
        
        )
    }
}

export default withRouter(ExploreContainer); 

