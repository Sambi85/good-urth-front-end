import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions'

// Sub Component //
import Timetable from '../components/Timetable.js';
import Weather from '../components/Weather.js'

// semantic-ui //
import { Dimmer, Card, Loader, Image, Grid, Segment } from 'semantic-ui-react';

  class Dashboard extends React.Component {

    componentDidMount() {
    
      this.props.fetchCurrentUser();
   
    }

    loading = () => {
      return (
               <div>
                  <Segment>
                    <Dimmer active>
                      <Loader indeterminate>Preparing Files</Loader>
                    </Dimmer>
              
                    <Image src='/images/wireframe/short-paragraph.png' />
                  </Segment>
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
