import React from 'react';
import { withRouter } from 'react-router-dom';
import PaymentStats from '../components/PaymentStats.js';
import ReceiptList from '../components/ReceiptList.js';

class OrdersContainer extends React.Component {

    render(){
        return (
            <>      
            <PaymentStats/>
            <ReceiptList/>     
            </>
        )
    }
}   

export default withRouter(OrdersContainer); 
