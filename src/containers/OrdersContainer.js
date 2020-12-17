import React from 'react';
import { withRouter } from 'react-router-dom';
import PaymentDashboard from '../Dashboard/PaymentDashboard.js';
import ReceiptList from '../lists/ReceiptList.js';
import { Grid } from 'semantic-ui-react'

class OrdersContainer extends React.Component {

    render(){

        console.log("OrdersContaienr Props:",this.props)
        
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

export default withRouter(OrdersContainer); 
