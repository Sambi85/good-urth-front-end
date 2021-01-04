import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { destroyTargetItemOrders, paidItemOrders } from '../redux/actions'
import ConfirmButton from '../components/ConfirmButton.js'
import EmptyButton from '../components/EmptyButton.js' 

import { Button, Dimmer, Grid, Image, Icon, Label, Loader, Rail, Segment, Table } from 'semantic-ui-react'

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class PaymentDashboard extends React.Component {
    
    tally = () => { 
        
        const tax = 0.45;
        const user = this.props.currentUser[0]
        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === false)
        let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
        
        if(filteredItemOrders.length > 0) {
            let subtotalArray = filteredItemOrders.map(itemOrder => itemOrder.order.subtotal)
            let subtotal = subtotalArray.reduce((a,b) => a + b )
            
            return(
                <>
                <Table.Row>
                    <Table.Cell>
                        <Label ribbon color='teal' size='huge'>Grand Total: {fm.from(subtotal + (subtotal * tax), { symbol: '$'})}</Label>
                    </Table.Cell>
                </Table.Row>
                                
                <Table.Row>
                    <Table.Cell>Sub Total: {fm.from( subtotal, { symbol: '$' })}</Table.Cell>
                </Table.Row>
                                
                <Table.Row>
                    <Table.Cell>Tax ({tax * 10}%) {fm.from( subtotal * tax, { symbol: '$' })}</Table.Cell>
                </Table.Row>
            </>
                )
                
            } else {
                
                return(
                    <>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon color='teal' size='huge'>Grand Total: {fm.from(0, { symbol: '$'})}</Label>
                            </Table.Cell>
                        </Table.Row>
                                        
                        <Table.Row>
                            <Table.Cell>Sub Total: {fm.from(0, { symbol: '$' })}</Table.Cell>
                        </Table.Row>
                                        
                        <Table.Row>
                            <Table.Cell>Tax ({tax * 10}%) {fm.from(0, { symbol: '$' })}</Table.Cell>
                        </Table.Row>
                </>
            )
        }
    }
     
    confirmCartHandler = () => {
            
            const user = this.props.currentUser[0]
            let notPaid = this.props.itemOrders.map(itemOrder => itemOrder.paid === false)
            let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
            let filteredIds = filteredItemOrders.map(element => element.id)
            
            this.props.paidItemOrders(filteredIds)
    }

    emptyCartHandler = () => {

        const user = this.props.currentUser[0]

        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === false)
        let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
        let filteredIds = filteredItemOrders.map(element => element.id)

        this.props.destroyTargetItemOrders(filteredIds)

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
                                <Table.HeaderCell><Icon name='shopping cart'/> Your Cart </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {this.tally()}

                                <Table.Row>
                                    <Table.Cell>
                                        <ConfirmButton confirmCartHandler={this.confirmCartHandler}/>
                                        <EmptyButton emptyCartHandler={this.emptyCartHandler}/>
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

const mdp = (dispatch) => {
    return {
        destroyTargetItemOrders: (itemOrderIds) => dispatch(destroyTargetItemOrders(itemOrderIds)),
        paidItemOrders: (itemOrderIds) => dispatch(paidItemOrders(itemOrderIds))
       }
    }
   
export default connect(msp, mdp)(withRouter(PaymentDashboard)); 