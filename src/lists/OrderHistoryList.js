import React from 'react';
import { connect } from 'react-redux'
import { Container, Grid, Label,  Pagination, Item, Table } from 'semantic-ui-react'
import moment from 'moment'

// Sub Component //
import OrderHistoryCard from '../cards/OrderHistoryCard.js';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class OrderHistoryList extends React.Component {
    
    state = {
        index: 0
    }
    
    filteredItemOrders = () => {
        
        const user = this.props.currentUser[0]
        let grouped = this.props.itemOrders.filter(itemOrder => itemOrder.group_id > 0)
        let filteredItemOrders = grouped.filter(element => element.order.user_id === user.id)
        
        return filteredItemOrders
    }
    
    unique = (array) => {
    
           let set = [... new Set(array)]
           let filteredSet = set.filter((item, index) => set.indexOf(item) === index);
           let uniqueSet = filteredSet.reduce( (unique, item) => unique.includes(item) ? unique : [...unique, item], []);
            
            return uniqueSet
    }
    
    uniqueIds = () => {
        let mappedIds = this.filteredItemOrders().map(itemOrder => itemOrder.group_id)
        let uniqueIds = this.unique(mappedIds)

        return uniqueIds
    }

    groupIdSelector = () => {
        
        let target = this.uniqueIds()[this.state.index]
        return target
    }

    filteredByDate = () => {
        
        let filteredItemOrders = this.filteredItemOrders().filter(itemOrder => itemOrder.group_id === this.groupIdSelector())
    
        return filteredItemOrders
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
                
        switch (newIndex) {
                    
            case isNaN(newIndex) === false :
                        
                this.setState({
                    index: parseInt(newIndex)
                })   
                
                return  console.log(newIndex)
              
            case "⟩" :

                if (this.state.index < this.uniqueIds().length - 1) {

                    this.setState({
                        index: this.state.index += 1
                    }) 

                    return console.log(this.state.index)
                
                } else {
                    
                    this.setState({
                        index: this.state.index
                    }) 
                }
            
            case "⟨" :

                if (this.state.index > 0) {

                    this.setState({
                        index: this.state.index -= 1
                    }) 
        
                        return console.log(this.state.index)
                    
                    } else if(this.state.index < 0) {
                        
                        this.setState({
                            index: 0
                        }) 
                    }

            case "»" :

                    this.setState({
                            index: this.uniqueIds().length - 1 
                    }) 
            
                        return console.log(newIndex)
            
            case "«" :

                    this.setState({
                        index: 0
                    }) 

                        return console.log(newIndex)
            
            default :
                return null
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
                                defaultActivePage={1} 
                                totalPages={this.filteredByDate().length}
                                onPageChange={(event) => this.paginationHandler(event)}
                            
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
           groups: state.groups,
           currentUser: state.currentUser
      }
   }

export default connect(msp, null)(OrderHistoryList); 
