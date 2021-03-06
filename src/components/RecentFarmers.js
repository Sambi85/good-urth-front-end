import React from 'react';
import { Grid, Label, Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import RecentCard from '../cards/RecentCard.js';

class RecentFarmers extends React.Component {

filteredItemOrders = () => {

    const user = this.props.currentUser[0]
    let paid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
    let filteredItemOrders = paid.filter(element => element.order.user_id === user.id)
    
    return filteredItemOrders
}

filteredItemIds = () => {

    let itemIds = this.filteredItemOrders().map(element => element.item_id)
    let targetItems = this.props.items.filter(element => itemIds.includes(element.id))
    let farmerIds = targetItems.map(element => element.farmer_id)
    
    return farmerIds
}

recentFarmerIterator = () => {
    
    let targetFarmers = [];
    let itemOrderIds = this.filteredItemOrders().map(itemOrder => itemOrder.id)
        
    for (let id of itemOrderIds) {
    
       targetFarmers = this.props.farmers.filter(farmer => farmer.id)

    }

    if (targetFarmers.length > 0) {
        
        return targetFarmers.map(element => <RecentCard key={element.id} id={element.id}/>)

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
                    {this.props.itemOrders.length > 0 ? this.recentFarmerIterator() : this.emptyFarmers()}
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
