import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Header, Segment } from 'semantic-ui-react'

// Sub Component //
import Dashboard from '../Dashboard/Dashboard.js'
import Chart from '../components/Chart.js'
import RecentFarmers from '../components/RecentFarmers.js'

class HomeContainer extends React.Component {
    
    render() {      
        return (       
                <>
                    {<Dashboard/>}
                    
                    <Grid celled='internally'>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Segment>
                                     <Header>Check out what's in season</Header> 
                                </Segment> 
                                
                                <Chart/>
                            
                            </Grid.Column>
                            
                            <Grid.Column width={3}> 
                                <RecentFarmers/>
                            </Grid.Column>
                        
                        </Grid.Row>
                    </Grid>    
                </>
        )
    }
}

export default withRouter(HomeContainer); 
