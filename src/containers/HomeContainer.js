import React from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard.js'
import { Grid,  Header, Segment } from 'semantic-ui-react'
import Chart from '../components/Chart.js'
import InfoTab from '../components/InfoTab.js'

class HomeContainer extends React.Component {

    render() {
        
        return (       
                <>
                <Dashboard/>
                        
                    <Grid celled='internally'>
                        <Grid.Row>
                            <Grid.Column width={10}>
                            <Segment>
                        
                                <Header>Check out what's in season</Header> 
                                </Segment> 
                                <Chart/>
                            </Grid.Column>
                            
                            <Grid.Column width={3}> 
                                <InfoTab/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>    
                </>
                )
            }
}

export default withRouter(HomeContainer); 
