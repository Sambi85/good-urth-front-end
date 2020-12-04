import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'
import { Image, Rail } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(  
            <Segment padded='very'>
                <Grid centered columns={3}>
                    <Grid.Column>
                        Search Bar
                        <Rail dividing position='left'>
                            <Header as='h2'>Good Urth</Header>
                        </Rail>
        
                        <Rail dividing position='right'>
                            <Header as='h2'>
                            <Icon name='home'/>
                            <Icon name='comment alternate outline'/>
                            <Icon name='compass outline'/>
                            <Icon name='food'/>
                            <Icon name='map marker alternate'/>
                            <Icon name='envelope outline'/>
                            <Icon name='setting'/>
                            <Icon name='sign-out'/>
                            </Header>
                        </Rail>
              
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default NavBar; 