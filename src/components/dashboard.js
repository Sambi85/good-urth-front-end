import React from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions'
import store from '../redux/store';
// semantic-ui
import { Header, Image, Grid, Segment } from 'semantic-ui-react'
// import { Container } from 'semantic-ui-react'


  class Dashboard extends React.Component {
      
    componentDidMount() {
          this.props.fetchUsers()
        }
        
    
    render() {
        // console.log(store.getState().users[0])
        return (
            <>
            {/* <Container>  
                <Header>
                    <Image style={{'font-size':42}}
                           src={store.getState().users[0].avatar}
                           rounded
                    />
                      {store.getState().users[0].username}
                </Header> 
                      {store.getState().users[0].bio}
              </Container> */}

  <Grid celled>
    <Grid.Row>
      <Grid.Column width={2}>
      <Image style={{'font-size':42}}
             src={store.getState().users[0].avatar}
             rounded
             />
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment>
      <Header>{store.getState().users[0].username}</Header> 
      </Segment>
      <Segment>
        {store.getState().users[0].bio}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>





              
            </>
        )
    }
}

const msp = (state) => {
    // console.log("current Redux state:", state)
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
