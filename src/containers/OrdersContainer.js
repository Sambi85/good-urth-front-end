import React from 'react';
import { withRouter } from 'react-router-dom';
import PaymentDashboard from '../Dashboard/PaymentDashboard.js';
import ReceiptList from '../lists/ReceiptList.js';

class OrdersContainer extends React.Component {

    render(){
        
        return (
            <>      
            <PaymentDashboard/>
            <ReceiptList/>     
            </>
        )
    }
}   

export default withRouter(OrdersContainer); 
