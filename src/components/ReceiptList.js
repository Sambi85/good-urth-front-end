import React from 'react';
import { connect } from 'react-redux'
import { getItemOrders } from '../redux/actions'
import store from '../redux/store';  
import ReceiptCard from '../cards/ReceiptCard.js';
import { Grid } from 'semantic-ui-react'

class ReceiptList extends React.Component {

    componentDidMount() {

        const fetchedItemOrder = this.props.fetchItemOrders();
   }
   
    itemOrderIterator = () => {
        let itemOrders = store.getState().itemOrders
        return itemOrders.map(itemOrder => <ReceiptCard key={itemOrder.id} itemOrder={itemOrder}/>)
    }

    render() {
        console.log("itemOrder:", store.getState().itemOrders)
        return(
            <>
            <Grid container columns={4}>
                <ReceiptCard/>
                {this.itemOrderIterator()}    
            </Grid>
            </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchItemOrders: () => dispatch(getItemOrders())
      }
   }
   
export default connect(msp, mdp)(ReceiptList); 