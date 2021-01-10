import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import OrderHistoryList from '../lists/OrderHistoryList.js'
import OrderHistoryDashboard from '../Dashboard/OrderHistoryDashboard.js'

 
class OrderHistoryContainer extends React.Component {       
        
    render(){
            
        return (
                 <>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                        
                            <Grid.Column>
                                <OrderHistoryDashboard/>
                            </Grid.Column>
                               
                               <OrderHistoryList/>

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
  
  export default connect(msp,null)(OrderHistoryContainer); 
