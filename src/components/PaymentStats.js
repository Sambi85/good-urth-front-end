import React from 'react';
import { Button, Grid, Image, Icon, Label, Rail, Segment, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getItemOrders, getCurrentUser } from '../redux/actions'
import store from '../redux/store';  

const itemOrders = store.getState().itemOrders
const currentUser = store.getState().currentUser[0]

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });
const tax = 0.45;

class PaymentStats extends React.Component {
    
    tally = () => {

        let filteredItemOrders = itemOrders.filter(element => element.order.user_id === currentUser.id)

        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
        return subtotal.reduce((a,b)=> { return a + b })
    }

    tax = () => {
        return this.tally() * tax
    }

    total = () => {
        return this.tally() + this.tally() * tax
    }

    render() {
        // console.log('order:', itemOrders[0].order.subtotal)
        console.log('tally:', this.tally())

        return (
            <>   
            <Grid>
                <Grid.Column>
                    <Segment>
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg' fluid='true' centered='true' />
                        <Rail attached internal position='left' size='huge'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Ready to Saddle Up ?</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                        <Label ribbon color='teal' size='huge'>Grand Total: {fm.from(this.total(), { symbol: '$'})}</Label>
                                        </Table.Cell>
                                    </Table.Row>
                                <Table.Row>

                                         
                                        <Table.Cell>Sub Total: {fm.from( this.tally(), { symbol: '$' })}</Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Tax ({tax * 10}%) {fm.from( this.tax(), { symbol: '$' })}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                        <Button positive>Checkout</Button>
                                        <Button negative>Empty Cart</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Rail>
                        
                            <Rail attached internal position='right' size='huge'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Default Payment Option</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            {/* <Label color='teal' size='huge'><Icon name='credit card'/>Card:{currentUser.cctype}</Label> */}
                                        </Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                            <Table.Cell>
                                                <p>Name:</p>{currentUser.username}
                                            </Table.Cell>
                                    </Table.Row>

                                    <Table.Row> 
                                        {/* <Table.Cell>{`Ending in ... ${currentUser.creditcard}`}</Table.Cell> */}
                                    </Table.Row>
                                
                                        
                                    <Table.Row>
        {/* <Table.Cell><p>Billing address:</p>{currentUser.address}</Table.Cell> */}
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Rail>

                    </Segment>
                </Grid.Column>
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
   
export default connect(msp, mdp)(PaymentStats);
// export default PaymentStats; 