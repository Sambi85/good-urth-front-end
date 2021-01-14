import React from 'react';
import { connect } from 'react-redux'

// semantic-ui //
import { Dimmer, Loader, Image, Pagination, Segment } from 'semantic-ui-react';

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

    onlyUnique = (value, index, self) => {
      return self.indexOf(value) === index;
    }

    paginationHandler = () => {
      
    }

    filteredItemOrder = () => {
        
      const user = this.props.currentUser[0]
      let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
      let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
          
          return filteredItemOrders
  }

    renderDashboard = () => {

      if (this.filteredItemOrder().length > 0) {
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
                                totalPages={this.filteredItemOrder().length}
                                // onPageChange={}
                            />
                </Segment>
        </>
        )
      
      } else {

        return null
      
      }
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
           currentUser: state.currentUser,
           itemOrders: state.itemOrders
      }
   }
   
export default connect(msp, null)(OrderHistoryDashboard); 