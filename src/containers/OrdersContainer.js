import React from 'react';
import { withRouter } from 'react-router-dom';
import PaymentDashboard from '../Dashboard/PaymentDashboard.js';
import ReceiptList from '../lists/ReceiptList.js';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getCurrentUser, getItemOrders } from '../redux/actions'
 
class OrdersContainer extends React.Component {

    componentDidMount() {
        
        if (this.props.itemOrders.length){
            
            return (
                this.props.fetchItemOrders(),   
                this.props.fetchCurrentUser()
            )
        }
    }         
        
    render(){
        console.log("this.props ORDERS CONTAINER:", this.props)
        return (
                 <>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                        
                            <Grid.Column>

                                <PaymentDashboard/>                   
                            
                            </Grid.Column>
                            
                                <ReceiptList/>     

                        </Grid.Row>
                    </Grid>
                </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           currentUser: state.currentUser
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchCurrentUser: () => dispatch(getCurrentUser()),
       fetchItemOrders: () => dispatch(getItemOrders())
      }
   }
  
  export default connect(msp,mdp)(withRouter(OrdersContainer)); 
