import React from 'react';
import { connect } from 'react-redux'
import { getItemOrders, increment } from '../redux/actions'
import { Dimmer, Grid, Image, Label, Loader, Segment, Table } from 'semantic-ui-react'

// Sub Component //
import ReceiptCard from '../cards/ReceiptCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class ReceiptList extends React.Component {

    state = {
        orderId: 0,
        itemOrderId: 0
    }

    componentDidMount() {
      
        return (
            this.props.fetchItemOrders()
        )
    }

    tally = () => {
        
        let filteredItemOrders = this.props.itemOrders.filter(element => element.order.user_id === this.props.currentUser[0].id)
        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
        
            return subtotal.reduce((a,b) => { return a + b })
    }

    itemOrderIdGrabber = (itemOrderId) => {

    return   this.setState({
           itemOrderId: itemOrderId
       })
    }

    orderIdGrabber = (orderId) => {

    return  this.setState({
             orderId: orderId
         })
    
    }

    delete = () => {
        
        console.log("deleted !!!", this.state.itemOrderId)

        let options = { method: "DELETE" }
        let itemOrderId = this.state.itemOrderId;
        let orderId = this.state.orderId;
        let newArray = [...this.state.itemsOrders]
        let foundIndex = newArray.findIndex(element => element.id === itemOrderId)
        let splicedArray = newArray.splice(foundIndex, 1) 
        
        fetch(`http://localhost:4000/item_orders/${itemOrderId}`, options)
        .then(response => response.json())
        .then(itemData =>  {
            
            console.log("This should be empty",itemData)

                this.setState({
                    itemOrders: newArray
                })
            }
        )
        
        fetch(`http://localhost:4000/orders/${orderId}`, options)
        .then(response => response.json())
        .then(orderData =>  console.log("This should be empty", orderData)
        
        ) 
    }

    itemOrderIterator = () => {

        let filteredItemOrders = this.props.itemOrders.filter(element => element.order.user_id === this.props.currentUser[0].id)
        

        return filteredItemOrders.map(itemOrder => <ReceiptCard 
                key={itemOrder.id} 
                itemOrder={itemOrder}
                itemOrderIdGrabber={this.itemOrderIdGrabber}
                orderIdGrabber={this.orderIdGrabber}
                delete={this.delete}
            />)
    }

    renderItemOrderIterator = () => {
        
        return this.itemOrderIterator()
        
    }

    loadingItemOrderIterator = () => {

            return (
                <div>
                    <Segment>
                        <Dimmer active>
                            <Loader indeterminate>Loading ItemOrder Iterator...</Loader>
                        </Dimmer>
                
                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </div>
        )
    }   


    loadingReceiptList = () => {
        return (
            <div>
                <Segment>
                    <Dimmer active>
                        <Loader indeterminate>Loading ReceiptList...</Loader>
                    </Dimmer>
            
                    <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>
            </div>
        )
    }

    renderReceiptList = () => {

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
                        
                            {this.props.itemOrders.length > 0 ? this.renderItemOrderIterator() : this.loadingItemOrderIterator()}
                        
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


    render() {
        console.log("Render Props:",this.props)
        console.log("Render State:",this.state)
        return(
            <>
                {this.props.itemOrders.length === 0 ? this.loadingReceiptList() : this.renderReceiptList()}
            </>
        )
    }
}

// listens
const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           currentUser: state.currentUser
      }
   }
   
// speaks
const mdp = (dispatch) => {
   return {
       fetchItemOrders: () => dispatch(getItemOrders()),
       increment: (item) => dispatch(increment(item))
      }
   }
   
export default connect(msp, mdp)(ReceiptList); 