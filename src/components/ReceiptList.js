import React from 'react';
import { connect } from 'react-redux'
import { getItemOrders, getCurrentUser } from '../redux/actions'
import { Grid, Label, Table } from 'semantic-ui-react'

// Sub Component //
import ReceiptCard from '../cards/ReceiptCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class ReceiptList extends React.Component {

    componentDidMount() {
        
        this.props.fetchItemOrders();
        this.props.fetchCurrentUser();
    }
    
    tally = () => {

        let filteredItemOrders = this.props.itemOrders.filter(element => element.order.user_id === this.props.currentUser[0].id)
        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
        
            return subtotal.reduce((a,b)=> { return a + b })
    }

    
    itemOrderIterator = () => {

        let filteredItemOrders =  this.props.itemOrders.filter(element => element.order.user_id === this.props.currentUser[0].id)

        return filteredItemOrders.map(itemOrder => <ReceiptCard 
            key={itemOrder.id} 
            quantity={itemOrder.quantity}
            farmerId={itemOrder.item.farmer_id}
            name={itemOrder.item.name}
            unit={itemOrder.item.purchase_unit}
            price={itemOrder.item.price}
            />)
    }

    render() {
      
        return(
            <>
            
            <Grid container columns={4}>
                <Table striped verticalAlign='middle' sortable='true' size='medium'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Cancel</Table.HeaderCell>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Farm</Table.HeaderCell>
                            <Table.HeaderCell>Unit</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Price per unit</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.itemOrderIterator()}
                        <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell size='large'><Label color='teal' size='huge'> Subtotal: {fm.from( this.tally(), { symbol: '$' })}</Label></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
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
       fetchItemOrders: () => dispatch(getItemOrders()),
       fetchCurrentUser: () => dispatch(getCurrentUser())
      }
   }
   
export default connect(msp, mdp)(ReceiptList); 