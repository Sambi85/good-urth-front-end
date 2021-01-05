import React from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import RecentCard from '';

class RecentFarmers extends React.Component {

recentFarmerIterator = () => {
    
    const user = this.props.currentUser[0]
    let paid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
    let filteredItemOrders = paid.filter(element => element.order.user_id === user.id)

    return (
        filteredItemOrders.map(element => <RecentCard key={element.id} />)
    )
}


    render() {
        return (
            <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    {this.recentFarmerIterator()}
                </Grid.Column> 
            
            </Grid.Row>
        </Grid>
        )
    }

}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders
      }
   }

export default connect(msp, null)(withRouter(RecentFarmers)); 
