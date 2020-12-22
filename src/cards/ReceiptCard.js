import React from 'react';
import { connect } from 'react-redux'
import { increment, decrement, getFarmers, destroyItemOrder, findItemOrder } from '../redux/actions'
import { Dimmer, Button, Icon, Input, Image, Label, Loader, Table, Segment } from 'semantic-ui-react';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2
});

class ReceiptCard extends React.Component {
    
    state = {
        placeholder: `x${this.props.itemOrder.quantity}`,
        itemOrderId: this.props.itemOrder.id
    }
    
    componentDidMount() {
        
        return (
            this.props.fetchFarmers()
        )        
    }
                                            
    deleteButton = () => {
        this.props.destroyItemOrder(this.state.itemOrderId)                   
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

    itemOrderGrabber = () => {
        
        return this.props.itemOrder[0]
    }

    farmerGrabber = () => {

        let targetItemOrder = this.props.itemOrders.filter(element => element.id === this.props.itemOrder.id)
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

        if (this.props.itemOrder.quantity < this.props.itemOrder.item.stock_amount) {
            
            return (  
            this.props.increment(this.props.itemOrder),
            this.setState({
                placeholder: `x${this.props.itemOrder.quantity}`
            })
        )

        } else {
            
            return (  
                this.setState({
                    placeholder: `x${this.props.itemOrder.quantity}`
                })
            )
        }
    }

    decrementButton = () => {
        console.log("decrement!")

        if (this.props.itemOrder.quantity === 0) {

        return (
            this.setState({
                placeholder: `x${this.props.itemOrder.quantity}`
                })
            )
        } else {

            return (
                this.props.decrement(this.props.itemOrder),
                this.setState({
                    placeholder: `x${this.props.itemOrder.quantity}`
                })
             )
        }
    }
    
    renderReceiptCard = () => {
        
        return (
            <>

                <Table.Row>
                    <Table.Cell>  <Button onClick={this.deleteButton}  color='red'> <Icon name='close' color='white' /></Button> </Table.Cell>
                    {/* <Table.Cell>{this.itemOrderGrabber().item.name}</Table.Cell> */}
                        {this.props.farmers.length === 0 ? this.loadingFarmerGrabber() : this.renderFarmerGrabber()}
                    
                    {/* <Table.Cell><Label size='large'>{this.itemOrderGrabber().item.purchase_unit}</Label> </Table.Cell> */}
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
                                {/* {fm.from(parseInt(this.itemOrderGrabber().item.price), { symbol: '$' })} */}
                        </Label>
                    </Table.Cell>
                    {/* <Table.Cell>{fm.from(parseInt(this.itemOrderGrabber().item.pri  ce) * this.itemOrderGrabber().quantity, { symbol: '$' })}</Table.Cell> */}
                </Table.Row>
            </>
        )
    }
    
    render(){
        console.log("find itemOrder:", this.props.findItemOrder(this.state.itemOrderId))
        console.log("state:",this.state.itemOrderId)
        return(
            <>
                {this.props.itemOrder.length === 0 ? this.loadingReceiptCard() : this.renderReceiptCard()}
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

        fetchFarmers: () => dispatch(getFarmers()),
        increment: (itemOrder) => dispatch(increment(itemOrder)),
        decrement: (itemOrder) => dispatch(decrement(itemOrder)),
        destroyItemOrder: (itemOrderId) => dispatch(destroyItemOrder(itemOrderId)),
        findItemOrder: (itemOrderId) => dispatch(findItemOrder(itemOrderId))
    
    }
}

export default connect( msp, mdp)(ReceiptCard);
