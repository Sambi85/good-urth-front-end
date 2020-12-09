import React from 'react';
import ReceiptCard from '../cards/ReceiptCard.js';
import { connect } from 'react-redux'
import { getOrders } from '../redux/actions'
import { Grid } from 'semantic-ui-react'
import store from '../redux/store';  

class ReceiptList extends React.Component {


    componentDidMount() {

        const fetchedOrder = this.props.fetchOrders();
   }
   
    
    orderIterator = () => {
        let orders = store.getState().orders
        return orders.map(order => <ReceiptCard key={order.id} order={order}/>)
    }

    render() {
        console.log(store.getState().orders)
        return(
            <>
            <Grid container columns={4}> 
                {this.orderIterator()}    
            </Grid>
            </>
        )
    }
}

const msp = (state) => {
    return {
           orders: state.orders
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchOrders: () => dispatch(getOrders())
      }
   }
   
export default connect(msp, mdp)(ReceiptList); 