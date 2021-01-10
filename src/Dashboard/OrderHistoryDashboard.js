import React from 'react';
import { connect } from 'react-redux'

// semantic-ui //
import { Grid, Dimmer, Container, Loader, Image, Rail, Pagination, Segment } from 'semantic-ui-react';

  class OrderHistoryDashboard extends React.Component {

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
          <>
             <Grid>
            <Grid.Column>
                <Segment>
                    <Image src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-pears-1296x728-feature.jpg' fluid='true' centered='true' />
                    <Rail attached internal position='left' size='huge'>
                        Left Rail
                    </Rail>

                </Segment>
            </Grid.Column>
        </Grid>
        </>
      )
    }
    
    render() {
      
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
   
export default connect(msp, null)(OrderHistoryDashboard); 