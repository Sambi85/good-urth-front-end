import React from 'react';
import { connect } from 'react-redux'

import { Dimmer, Image, Label, Loader, Table, Segment } from 'semantic-ui-react';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2
});

class OrderHistoryCard extends React.Component {
                                                
    loadingReceiptCard = () => {
                                                
                            return (
                                <div>
                                    <Segment>
                                        <Dimmer active>
                                            <Loader indeterminate>Loading Order History ...</Loader>
                                        </Dimmer>
                                
                                        <Image src='/images/wireframe/short-paragraph.png' />
                                    </Segment>
                                </div>
        )
    }

    filteredItemOrder = () => {
        
        const user = this.props.currentUser[0]
        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
        let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
            
        return filteredItemOrders
    }
    
    itemOrderGrabber = () => {

        let itemOrder = this.filteredItemOrder().filter(element => element.id === this.props.id)
        return itemOrder[0]

    }

    farmerGrabber = () => {
        
        let targetItemOrder = this.props.itemOrders.filter(element => element.id === this.props.id)
        let farmer_id = targetItemOrder[0].item.farmer_id
        let farmer_name = this.props.farmers.filter(element => element.id === farmer_id)[0].username
        
        return farmer_name
    }

    loadingFarmerGrabber = () => {
        
        return (
                  <div>
                    <Segment>
                        <Dimmer active>
                            <Loader indeterminate>Loading Order ...</Loader>
                        </Dimmer>
                                
                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                 </div>
        )
    }
    
    renderReceiptCard = () => {

       let itemOrder = this.itemOrderGrabber()
       let price = parseInt(itemOrder.item.price)
        if (itemOrder !== null) {

        return (
            <>
                <Table.Row>
                    <Table.Cell>{itemOrder.item.name}</Table.Cell>
                    <Table.Cell>{this.farmerGrabber()}</Table.Cell>
                    <Table.Cell><Label size='large'>{itemOrder.item.purchase_unit}</Label> </Table.Cell>
                    <Table.Cell>{itemOrder.quantity}</Table.Cell>
                    <Table.Cell>
                        <Label color='teal' tag size='medium'>
                                {fm.from(price, { symbol: '$' })}
                        </Label>
                    </Table.Cell>
                    <Table.Cell>{fm.from(price * itemOrder.quantity, { symbol: '$' })}</Table.Cell>
                </Table.Row>
                    
            </>
            )
        }
    }
    
    render(){
        
        return(
            <>
                {this.props.itemOrders.length === 0 ? this.loadingReceiptCard() : this.renderReceiptCard()}
            </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           farmers: state.farmers,
           currentUser: state.currentUser
      }
   }

export default connect( msp, null)(OrderHistoryCard);
