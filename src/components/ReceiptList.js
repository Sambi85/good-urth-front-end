import React from 'react';
import { connect } from 'react-redux'
import { getItemOrders, getCurrentUser } from '../redux/actions'
import store from '../redux/store';  
import ReceiptCard from '../cards/ReceiptCard.js';
import { Segment, Grid, Label, Table } from 'semantic-ui-react'

const itemOrders = store.getState().itemOrders
const currentUser = store.getState().currentUser[0]

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class ReceiptList extends React.Component {

    state = {
        itemOrders: [],
        currentUser: []
    }
    
    tally = () => {

        let filteredItemOrders = itemOrders.filter(element => element.order.user_id === currentUser.id)

        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
        return subtotal.reduce((a,b)=> { return a + b })
    }

    componentDidMount() {
        
        const fetchedItemOrder = this.props.fetchItemOrders(), fetchedCurrentUser = this.props.fetchCurrentUser();
        
        this.setState({
            itemOrders: itemOrders,
            currentUser: currentUser
        })
    }
    
    itemOrderIterator = () => {

        let filteredItemOrders =  this.state.itemOrders.filter(element => element.order.user_id === this.state.currentUser.id)

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
            // console.log("itemOrder:", this.state.itemOrders)
            // console.log("currentUser:", this.state.currentUser)
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
       fetchCurrentUser: () => dispatch(getCurrentUser()),
      }
   }
   
export default connect(msp, mdp)(ReceiptList); 