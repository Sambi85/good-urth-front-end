import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Dimmer, Grid, Image, Icon, Label, Loader, Rail, Segment, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });
const tax = 0.45;

class PaymentDashboard extends React.Component {
    
    tally = () => {

        const user = this.props.currentUser[0]
        const itemOrders = this.props.itemOrders
   
        let filteredItemOrders = itemOrders.filter(element => element.order.user_id === user.id)
        let subtotal = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
        
        return subtotal.reduce((a,b)=> { return a + b })
    }

    tax = () => {
        return this.tally() * tax
    }

    total = () => {
        return this.tally() + this.tally() * tax
    }

    confirmHandler = () => {

    }

    emptyCartHandler = () => {

    }

    updateHandler = () => {

       this.props.history.push(`/settings`)
    }

    loadingPaymentDashboard = () => {
        return (
                <div>
                    <Segment>
                        <Dimmer active>
                            <Loader indeterminate>Loading Payment Dashboard...</Loader>
                        </Dimmer>
                
                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </div>
        )
    }

    renderPaymentDashboard = () => {

        return (
            
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
                                    <Button onClick={this.confirmHandler} positive>Confirm</Button>
                                    <Button onClick={this.emptyCartHandler} negative>Empty Cart</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        </Rail>
                    
                        <Rail attached internal position='right' size='huge'>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                <Table.HeaderCell>Your Default Card</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Label color='teal' size='huge'><Icon name='credit card'/>Card: Master Card</Label>
                                    </Table.Cell>
                                </Table.Row>
                                
                                <Table.Row>
                                        <Table.Cell>
                                            Name: {this.props.currentUser[0].username}
                                        </Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell> Card Number:  Ending in... XXXX </Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell> Exp Date: 10/26 </Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell> Zipcode: 11206 </Table.Cell>
                                </Table.Row>
                                    
                                <Table.Row>
                                <Table.Cell><p>Billing address:</p> 123 Sesame Street Apt 1F  10023 Manhattan, New York</Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell><Button onClick={this.updateHandler} color='green' size='huge'>Update</Button></Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        </Rail>

                </Segment>
            </Grid.Column>
        </Grid>   
       
       )
    }
    
    render() {
        
        return (
                <> {this.props.itemOrders.length === 0 ? this.loadingPaymentDashboard() : this.renderPaymentDashboard()} </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           currentUser: state.currentUser
      }
   }
   
export default connect(msp, null)(withRouter(PaymentDashboard)); 