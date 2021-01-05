import React from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import RecentCard from '../cards/ReceiptCard.js';

class RecentFarmers extends React.Component {

recentFarmerIterator = () => {
    
    const user = this.props.currentUser[0]
    let paid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
    let filteredItemOrders = paid.filter(element => element.order.user_id === user.id)
    let itemIds = filteredItemOrders.map(element => element.item_id)
    let targetItems = this.props.items.filter(element => itemIds.includes(element.id))
    let farmerIds = targetItems.filter(element => element.farmer_id)
    let targetFarmers = this.props.farmers.filter(element => farmerIds.includes(element.id))

    return (
        targetFarmers.map(element => <RecentCard key={element.id} id={element.id} />)
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
           itemOrders: state.itemOrders,
           currentUser: state.currentUser,
           items: state.items,
           farmers: state.farmers
      }
   }

export default connect(msp, null)(withRouter(RecentFarmers)); 
