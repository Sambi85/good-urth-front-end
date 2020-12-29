import React from 'react';
import { connect } from 'react-redux'
import { Container, Grid, Image, Label, Item, Segment, Table } from 'semantic-ui-react'

// Sub Component //
import ReceiptCard from '../cards/ReceiptCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class ReceiptList extends React.Component {

    tally = () => {
        
        const user = this.props.currentUser[0]
        let filteredItemOrders = this.props.itemOrders.filter(element => element.order.user_id === user.id)
        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
      
        return subtotal.reduce((a,b) => a + b )
    }

    itemOrderIterator = () => {
        
        const user = this.props.currentUser[0]
        let filteredItemOrders = this.props.itemOrders.filter(element => element.order.user_id === user.id)

        return filteredItemOrders.map(itemOrder => <ReceiptCard 
                key={itemOrder.id} 
                itemOrder={itemOrder}
            />)
    }
    
    loadingReceiptList = () => {

        const items = [
            {
              childKey: 0,
              image:'https://previews.123rf.com/images/stoonn/stoonn1908/stoonn190800144/130409165-empty-burlap-sack-bag-on-white-background.jpg',
              header: 'Empty Cart',
              description: '"An empty sack cannot stand up right !" - English proverb',
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


    render() {
        console.log("this.props RECEIPT LIST:",this.props)
        return(
            <>
                {this.props.itemOrders.length === 0 ? this.loadingReceiptList() : this.renderReceiptList() }
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

export default connect(msp, null)(ReceiptList); 