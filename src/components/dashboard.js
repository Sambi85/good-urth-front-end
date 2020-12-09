import React from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions'
import store from '../redux/store';
import Timetable from './Timetable.js';

// semantic-ui
import { Header, Image, Grid, Segment } from 'semantic-ui-react'

  class Dashboard extends React.Component {
      
    componentDidMount() {
          this.props.fetchUsers()
        }
    
    render() {
      
        return (
                 <>
                  <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <Header as='h2'>Messages</Header>
                      </Grid.Column>
                      
                      <Grid.Column width={3}>  
                      <Image style={{'font-size':42}}
                               src={store.getState().users[0].avatar}
                              rounded
                              />
                      </Grid.Column>

                      <Grid.Column width={4}>
                      <Segment>
                          <Header>{store.getState().users[0].username}</Header> 
                        </Segment>
                        <Segment>
                          {store.getState().users[0].bio}
                        </Segment>
                      </Grid.Column>

                      <Grid.Column width={4}>
                      <Timetable/>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </>
        )
    }
}

const msp = (state) => {
    return {
           users: state.users
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchUsers: () => dispatch(getUsers())
      }
   }
   
export default connect(msp, mdp)(Dashboard); 
