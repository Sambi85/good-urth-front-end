import React from 'react';
import { withRouter } from 'react-router-dom';
import { Checkbox, Grid, Image, Segment } from 'semantic-ui-react'
import NycMap from '../components/NycMap.js';
import MarketList from '../components/MarketList.js';

class ExploreContainer extends React.Component {

    all = () => <Checkbox All toggle/>
    manhattan = () => <Checkbox Manhattan toggle/>
    brooklyn = () => <Checkbox Brooklyn toggle/>
    bronx = () => <Checkbox Bronx toggle/>
    queens = () => <Checkbox Queens toggle/>
    statenIsland = () => <Checkbox Staten Island toggle/>
    
    render(){
        return (
            <Grid divided='vertically'>
                <Grid.Row columns={1}>
                
                    <Grid.Column>
                        {/* <NycMap/> */}
                        <div align='center'><Image src='https://snazzy-maps-cdn.azureedge.net/assets/8097-wy.png?v=20170626083314' size='Huge'/></div>
                    </Grid.Column>
                    <Grid.Column columns={1}>
                        <Segment>
                        <div align='center'>
                            <span>All {this.all()}</span>
                            <span>Brooklyn {this.brooklyn()}</span>
                            <span>Bronx {this.bronx()}</span>
                            <span>Manhattan {this.manhattan()}</span>
                            <span>Queens {this.queens()}</span>
                            <span>Staten Island {this.statenIsland()}</span>
                        </div>
                        </Segment>
                </Grid.Column>
                <MarketList/> 
            </Grid.Row>
          </Grid>
        
        )
    }
}

export default withRouter(ExploreContainer); 

