import React from 'react';
import { connect } from 'react-redux'

// semantic-ui //
import { Grid, Dimmer, Container, Loader, Label, Image, Icon, Rail, Pagination, Table, Segment } from 'semantic-ui-react';

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
            <Image src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-pears-1296x728-feature.jpg' fluid='true' centered='true' />
                <Segment fluid={true} textAlign='center'>
                            <Pagination
                                boundaryRange={0}
                                defaultActivePage={1}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={1}
                                totalPages={10}
                            />
                </Segment>
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