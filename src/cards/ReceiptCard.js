import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, getFarmers, destroyItemOrder } from '../redux/actions'
import { Dimmer, Button, Icon, Input, Image, Label, Loader, Table, Segment } from 'semantic-ui-react';
import { convertNwSeToNeSw } from 'google-map-react';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2
});

class ReceiptCard extends React.Component {
    
    state = {
        placeholder: '',
    }
    
    componentDidMount() {
        
        return (
            this.props.fetchFarmers(),
            this.setState({
                placeholder: `x${this.itemOrderGrabber().quantity}`,
            })
        )        
    }
                                            
    deleteButton = () => {
        this.props.destroyItemOrder(this.props.id)                   
    }
                                            
    loadingReceiptCard = () => {
                                                
                            return (
                                <div>
                                    <Segment>
                                        <Dimmer active>
                                            <Loader indeterminate>Loading Receipt Card ...</Loader>
                                        </Dimmer>
                                
                                        <Image src='/images/wireframe/short-paragraph.png' />
                                    </Segment>
                                </div>
        )
    }

    farmerGrabber = () => {

        let targetItemOrder = this.props.itemOrders.filter(element => element.id === this.props.id)
        let farmer_id = targetItemOrder[0].item.farmer_id
        let farmer_name = this.props.farmers.filter(element => element.id === farmer_id)[0].username
       
        return farmer_name
    }

    loadingFarmerGrabber = () => {
        
        return (
                  <div>
                    <Segment>
                        <Dimmer active>
                            <Loader indeterminate>Loading Farmer's Name ...</Loader>
                        </Dimmer>
                                
                        <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                 </div>
        )
    }

    renderFarmerGrabber = () => {

        return (
    
                   <> <Table.Cell>{this.farmerGrabber()}</Table.Cell> </>
        
        )
    }

    incrementButton = () => {
        console.log("increment!")

        if (this.itemOrderGrabber().quantity < this.itemOrderGrabber().item.stock_amount) {
            
            return (  
            this.props.increment(this.itemOrderGrabber()),
            this.setState({
                placeholder: `x${this.itemOrderGrabber().quantity}`
            })
        )

        } else {
            
            return (  
                this.setState({
                    placeholder: `x${this.itemOrderGrabber().quantity}`
                })
            )
        }
    }

    decrementButton = () => {
        console.log("decrement!")

        if (this.props.itemOrder.quantity === 0) {

        return (
            this.setState({
                placeholder: `x${this.itemOrderGrabber().quantity}`
                })
            )
        } else {

            return (
                this.props.decrement(this.itemOrderGrabber()),
                this.setState({
                    placeholder: `x${this.itemOrderGrabber().quantity}`
                })
             )
        }
    }

    itemOrderGrabber = () => {

        const user = this.props.currentUser[0]
        let notPaid = this.props.itemOrders.filter(itemOrder => itemOrder.paid === false)
        let filteredItemOrders = notPaid.filter(element => element.order.user_id === user.id)
        let itemOrder = filteredItemOrders.filter(element => element.id === this.props.id)
        return itemOrder[0]
    }
    
    renderReceiptCard = () => {

       let itemOrder = this.itemOrderGrabber()
        console.log(itemOrder.item.name)
        if (itemOrder !== null) {

        return (
            <>
                <Table.Row>
                    <Table.Cell>  <Button onClick={this.deleteButton}  color='red'> <Icon name='close' color='white' /></Button> </Table.Cell>
                    <Table.Cell>{itemOrder.item.name}</Table.Cell>
                        {this.props.farmers.length === 0 ? this.loadingFarmerGrabber() : this.renderFarmerGrabber()}
                    
                    <Table.Cell><Label size='large'>{itemOrder.item.purchase_unit}</Label> </Table.Cell>
                    <Table.Cell>
                        <Button  icon size='mini' onClick={this.decrementButton}>
                            <Icon name='left arrow'/>
                        </Button>
                        <Button icon size='mini' onClick={this.incrementButton}>
                            <Icon name='right arrow'/>
                        </Button>
                    <Input id='input' size='mini' placeholder={this.state.placeholder} size='mini'/>
                    </Table.Cell>
                    <Table.Cell>
                        <Label color='teal' tag size='medium'>
                                {fm.from(parseInt(itemOrder.item.price), { symbol: '$' })}
                        </Label>
                    </Table.Cell>
                    <Table.Cell>{fm.from(parseInt(itemOrder.item.price) * itemOrder.quantity, { symbol: '$' })}</Table.Cell>
                </Table.Row>
                    
            </>
            )
        }
    }
    
    render(){
        console.log(this.props)
        return(
            <>
                {this.props.itemOrders.length === 0 ? this.loadingReceiptCard() : this.renderReceiptCard()}
            </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           farmers: state.farmers,
           currentUser: state.currentUser
      }
   }

const mdp = (dispatch) => {
    return {

        fetchFarmers:() => dispatch(getFarmers()),
        increment: (itemOrder) => dispatch(increment(itemOrder)),
        decrement: (itemOrder) => dispatch(decrement(itemOrder)),
        destroyItemOrder: (itemOrderId) => dispatch(destroyItemOrder(itemOrderId))
    
    }
}

export default connect( msp, mdp)(ReceiptCard);
