import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// import { getCurrentUser, getItemOrders } from '../redux/actions'

import { Grid } from 'semantic-ui-react'

// import PaymentDashboard from '../Dashboard/PaymentDashboard.js';
// import ReceiptList from '../lists/ReceiptList.js';
 
class OrderHistoryContainer extends React.Component {

    // componentDidMount() {
        
    //     if (this.props.itemOrders.length){
            
    //         return (
    //             this.props.fetchItemOrders(),   
    //             this.props.fetchCurrentUser()
    //         )
    //     }
    // }         
        
    render(){
        
        return (
                 <>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                        
                            <Grid.Column>
                                ORDER HISTORY PAGE              
                            
                            </Grid.Column>
                               

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
   
// const mdp = (dispatch) => {
//    return {
//        fetchCurrentUser: () => dispatch(getCurrentUser()),
//        fetchItemOrders: () => dispatch(getItemOrders())
//       }
//    }
  
  export default connect(msp,null)(withRouter(OrderHistoryContainer)); 
