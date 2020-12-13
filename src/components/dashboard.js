import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions'

// Sub Component //
import Timetable from './Timetable.js';
import Weather from './Weather.js'

// semantic-ui //
import { Card, Image, Grid } from 'semantic-ui-react'

  class Dashboard extends React.Component {

    componentDidMount() {
    
      this.props.fetchCurrentUser();
   
    }

    loading = () => {
      return (
              <div class="ui segment">
                <div class="ui active dimmer">
                    <div class="ui indeterminate text loader">Loading Explore Page...</div>
                </div>
              </div>
      )
    }    

    renderDashboard = () => {
      return(
        <Grid celled>
                    <Grid.Row>
                   
                      <Grid.Column width={3}>
                            <Card.Content textAlign='center'> 
                                <Card.Header textAlign='center'>{this.props.currentUser[0].username}</Card.Header>
                                <Image src={this.props.currentUser[0].avatar}/>
                                <Card.Meta>
                                  
                                </Card.Meta>
                                <Card.Description textAlign='center'>
                                {this.props.currentUser[0].bio}
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                              </Card.Content>
                          
                        </Grid.Column>

                        <Grid.Column width={3}>
                        
                          <Weather/>
                        
                        </Grid.Column>

                        <Grid.Column width={5}>

                            <Timetable/>    
                        
                        </Grid.Column>
                    
                    </Grid.Row>
                  </Grid>
      )
    }
    
    render() {

      console.log("this.props.currentUser:",this.props.currentUser[0])
        return (
                 <>
                 {this.props.currentUser.length === 0 ? this.loading() : this.renderDashboard()}
                </>
        )
    }
}

const msp = (state) => {
    return {
           currentUser: state.currentUser
      }
   }
   
const mdp = (dispatch) => {
   return {
        fetchCurrentUser: () => dispatch(getCurrentUser())
      }
   }
   
export default connect(msp, mdp)(Dashboard); 
