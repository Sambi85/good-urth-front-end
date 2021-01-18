import React from 'react';
import { connect } from 'react-redux'
import { Container, Grid, Label,  Pagination, Item, Table } from 'semantic-ui-react'

// Sub Component //
import OrderHistoryCard from '../cards/OrderHistoryCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class OrderHistoryList extends React.Component {
    
    state = {
        index: 0
    }

    unique = (array) => {

       let set = [... new Set(array)]
       let filteredSet = set.filter((item, index) => set.indexOf(item) === index);
       let uniqueSet = filteredSet.reduce( (unique, item) => unique.includes(item) ? unique : [...unique, item], []);
        
        return uniqueSet
    }
    
    filteredItemOrders = () => {
        
        const user = this.props.currentUser[0]
        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === true)
        let filteredItemOrders = notPaid.filter(itemOrder => itemOrder.order.user_id === user.id)
        
        return filteredItemOrders
    }

    filteredByDate = () => {

        let mappedByDate = this.filteredItemOrders().map(itemOrder => itemOrder.date_purchased)
        let uniqueDates = this.unique(mappedByDate)
        
        
        let filteredItemOrders = this.filteredItemOrders().filter(itemOrder => itemOrder.date_purchased === uniqueDates[this.state.index])
        
        return filteredItemOrders
    }

    pages = () => {

        let mappedByDate = this.filteredItemOrders().map(itemOrder => itemOrder.date_purchased)
        let uniqueDates = this.unique(mappedByDate)

        return uniqueDates
    }

    tally = () => {
    
        if (this.filteredByDate().length > 0) {
            
            let helper = this.filteredByDate().map(itemOrder => Math.floor(itemOrder.item.price) * itemOrder.quantity)
            let subtotal = helper.reduce((a,b) => a + b )
        
            return subtotal

        } else {

            return 0;
        }
    }

    tallyHandler = () => { 

            let subtotal = this.tally();
            let tax = 0.045

            return(
                    <>
                        <Label color='teal' size='huge'> Grand Total: {fm.from(subtotal + (subtotal * tax), { symbol: '$' })}</Label>
                        <Label color='teal' size='huge'> Tax(4.5%): {fm.from(tax * subtotal, { symbol: '$' })}</Label>
                        <Label color='teal' size='huge'> Subtotal: {fm.from(subtotal, { symbol: '$' })}</Label>
                     </>
            )     
    }

    paginationHandler = (event) => {
           
            let newIndex = event.target.innerHTML
        
            if(isNaN(newIndex === true)) {
                
                this.setState({
                    index: newIndex
                })
        }    
    }

    itemOrderIterator = () => {

        if (this.filteredByDate().length > 0) {
        
            return this.filteredByDate().map(itemOrder => <OrderHistoryCard
                   key={itemOrder.id} 
                   id={itemOrder.id}
               />)
       
        } else {

            return this.loadingReceiptList()

        }
    }
    
    loadingReceiptList = () => {

        const items = [
            {
              childKey: 0,
              image:'https://imagevars.gulfnews.com/2020/01/20/Auto-fuel_16fc32751ba_medium.jpg',
              header: "Empty",
              description: 'Go buy something !',
              meta: "You currently have no orders in your history"
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

        if (this.filteredItemOrders().length > 0) {
        
        return(
            <>
            
            <Grid container columns={2}>
                <Table striped verticalAlign='middle'  size='medium'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Farm</Table.HeaderCell>
                            <Table.HeaderCell>Unit</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Price per unit</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        
                            { this.itemOrderIterator() }
                        
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                            {this.tallyHandler()}
                            <Pagination 
                                defaultActivePage={this.pages()[0]}
                                totalPages={this.pages().length}
                                onClick={(event) => this.paginationHandler(event)}
                            />
                                
                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Footer>
                    </Table.Body>
                </Table>
            </Grid>
            
            </>
        )
        } else {

            return this.loadingReceiptList()

        }
    }

    render() {
            console.log(this.props)
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

export default connect(msp, null)(OrderHistoryList); 
