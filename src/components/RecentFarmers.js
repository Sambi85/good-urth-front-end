import React from 'react';
import { Grid, Label, Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getItems } from '../redux/actions'
import { withRouter } from 'react-router-dom';
import RecentCard from '../cards/ReceiptCard.js';

class RecentFarmers extends React.Component {

    componentDidMount() {
        
        return (
                this.props.fetchItems()       
        )
    }

recentFarmerIterator = () => {
    
    const user = this.props.currentUser[0]
    let paid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
    let filteredItemOrders = paid.filter(element => element.order.user_id === user.id)
    let itemIds = filteredItemOrders.map(element => element.item_id)
    let targetItems = this.props.items.filter(element => itemIds.includes(element.id))
    
    let farmerIds = targetItems.map(element => element.farmer_id)
    let targetFarmers = this.props.farmers.filter(element => farmerIds.includes(element.id))
    // debugger
    
    if (targetFarmers.length > 0) {
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
        console.log(this.props)
        return (
            <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    {this.props.items.length > 0? this.recentFarmerIterator() : this.emptyFarmers}
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

const mdp = (dispatch) => {
    return {
         fetchItems: () => dispatch(getItems())
       }
    }

export default connect(msp, mdp)(withRouter(RecentFarmers)); 
