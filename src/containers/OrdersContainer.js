import React from 'react';
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

export default OrdersContainer; 