import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions'
import store from '../redux/store';
import Timetable from './Timetable.js';

// semantic-ui
import { Card, Header, Image, Grid, Segment } from 'semantic-ui-react'

  // const currentUser = store.getState().currentUser;

  class Dashboard extends React.Component {


    state = {
      currentUser: []
    }

      
    componentDidMount() {
          this.props.fetchCurrentUser()

          this.setState({
            currentUser: store.getState().currentUser[0]
          })
        }
    
    render() {
          // console.log(currentUser)
        return (
                 <>
                  <Grid celled>
                    <Grid.Row>
                   
                      <Grid.Column width={3}>
                            <Card.Content textAlign='center'> 
                                <Card.Header textAlign='center'>{this.state.currentUser.username}</Card.Header>
                                <Image src={this.state.currentUser.avatar}/>
                                <Card.Meta>
                                  
                                </Card.Meta>
                                <Card.Description textAlign='center'>
                                {this.state.currentUser.bio}
                                </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                              </Card.Content>
                          
                        </Grid.Column>
                    </Grid.Row>
                  </Grid>
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
