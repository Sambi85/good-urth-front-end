import React from 'react';
import { Grid, Label, Image, Table } from 'semantic-ui-react'
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

    if (targetFarmers === []) {
        // debugger
    return (
        targetFarmers.map(element => <RecentCard key={element.id} id={element.id} />)
    )
    } else {
       return this.emptyFarmers();
    }
}

emptyFarmers = () => {
    return (
            <>
                <Label  color='grey' size='huge'>Mooooooo... Looks like you haven't purchased anything, yet. Sorry :(</Label>
                <Image size='huge' src={'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2020/05/19/the-cow-favors-natural-over-synthetic-vitamin-e/11403541-1-eng-GB/The-cow-favors-natural-over-synthetic-vitamin-E.jpg'}/>
            </>
    )
}


    render() {
        return (
            <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    {this.props.itemOrders? this.recentFarmerIterator() : this.emptyFarmers}
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
