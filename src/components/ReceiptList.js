import React from 'react';
import { connect } from 'react-redux'
import { getItemOrders, getCurrentUser } from '../redux/actions'
import store from '../redux/store';  
import ReceiptCard from '../cards/ReceiptCard.js';
import { Segment, Grid, Table } from 'semantic-ui-react'

const itemOrders = store.getState().itemOrders
const currentUser = store.getState().currentUser

class ReceiptList extends React.Component {

    componentDidMount() {

        const fetchedItemOrder = this.props.fetchItemOrders(), 
              fetchedCurrentUser = this.props.fetchCurrentUser();
   }

    itemOrderIterator = () => {

        let filteredItemOrders =  itemOrders.filter(element => element.order.user_id === currentUser[0].id)

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
            // console.log("itemOrder:", itemOrders[0])
            // console.log("currentUser:", currentUser[0].id)
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
                        <Table.Cell>Subtotal</Table.Cell>
                        <Table.Cell>{`$100.00`}</Table.Cell>
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