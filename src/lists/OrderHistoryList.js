import React from 'react';
import { connect } from 'react-redux'
import { Container, Grid, Label, Item, Table } from 'semantic-ui-react'

// Sub Component //
import OrderHistoryCard from '../cards/OrderHistoryCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class ReceiptList extends React.Component {

    filteredItemOrders = () => {
        
        const user = this.props.currentUser[0]
        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === false)
        let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
        
        return filteredItemOrders

    }

    tally = () => {
    
        let subtotalArray = this.filteredItemOrders().map(itemOrder => itemOrder.order.subtotal)
        let subtotal = subtotalArray.reduce((a,b) => a + b )

        return subtotal

    }

    tallyHandler = () => { 

            let subtotal = this.tally();
            let tax = 0.045

            return(<>
             <Table.Cell textAlign='left' size='large'>
                 <Label color='teal' size='huge'> Subtotal: {fm.from(subtotal, { symbol: '$' })}</Label><Label color='teal' size='huge'> Tax(4.5%): {fm.from(tax * subtotal, { symbol: '$' })}</Label>
                 <Label color='teal' size='huge'> Grand Total: {fm.from(subtotal + (subtotal * tax), { symbol: '$' })}</Label>
            </Table.Cell>
            
            </>)     
        
    }

    itemOrderIterator = () => {
        
            return this.filteredItemOrders().map(itemOrder => <OrderHistoryCard
                   key={itemOrder.id} 
                   id={itemOrder.id}
               />)
    }
    
    loadingReceiptList = () => {

        const items = [
            {
              childKey: 0,
              image:'https://imagevars.gulfnews.com/2020/01/20/Auto-fuel_16fc32751ba_medium.jpg',
              header: "Empty",
              description: 'You currently have no Item Orders',
              meta: "Try finding a farmer's market or a vendor through the explore page!"
            }
          ]

        return (
            <div>
                <Container>
                        <Item.Group items={items} />
                </Container>
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
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Farm</Table.HeaderCell>
                            <Table.HeaderCell>Unit</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Price per unit</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        
                            { this.itemOrderIterator() }
                        
                        <Table.Row>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        {this.tallyHandler()}
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid>
            
            </>
        )
    }

    render() {
        
        return(
            <>
                {this.props.itemOrders.length === 0 ? this.loadingReceiptList() : this.renderReceiptList() }
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

export default connect(msp, null)(ReceiptList); 
