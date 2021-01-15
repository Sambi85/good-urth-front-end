import React from 'react';
import { connect } from 'react-redux'
import { destroyItemOrder } from '../redux/actions'
import { Dimmer, Button, Icon, Input, Image, Label, Loader, Table, Segment } from 'semantic-ui-react';

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
        
            this.setState({
                placeholder: this.itemOrderGrabber().quantity
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

    itemOrderGrabber = () => {

        let itemOrder = this.props.itemOrders.filter(element => element.id === this.props.id)
        
        return itemOrder[0]

    }

    farmerGrabber = () => {
        
        let farmer_id = this.itemOrderGrabber().item.farmer_id
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


    incrementButton = () => {
        console.log("increment!")

        if (this.state.placeholder < this.itemOrderGrabber().item.stock_amount) {
            
            return (  
            this.setState({
                placeholder: this.state.placeholder + 1
            })
        )

        } else {
            
            return (  
                this.setState({
                    placeholder: this.state.placeholder
                })
            )
        }
    }

    decrementButton = () => {
        console.log("decrement!")

        if (this.state.placeholder >= 2) {

        return (
            this.setState({
                placeholder: this.state.placeholder - 1
                })
            )
        } else {

            return (
                this.setState({
                    placeholder: this.state.placeholder
                })
             )
        }
    }

    
    renderReceiptCard = () => {

       let itemOrder = this.itemOrderGrabber()

       let price = parseInt(itemOrder.item.price)
        if (itemOrder !== null) {

        return (
            <>
                <Table.Row>
                    <Table.Cell>  <Button onClick={this.deleteButton}  color='red'> <Icon name='close' color='white' /></Button> </Table.Cell>
                    <Table.Cell>{itemOrder.item.name}</Table.Cell>
                    <Table.Cell>{this.farmerGrabber()}</Table.Cell>
                    
                    <Table.Cell><Label size='large'>{itemOrder.item.purchase_unit}</Label> </Table.Cell>
                    <Table.Cell>
                        <Button  icon size='mini' onClick={this.decrementButton}>
                            <Icon name='left arrow'/>
                        </Button>
                        <Button icon size='mini' onClick={this.incrementButton}>
                            <Icon name='right arrow'/>
                        </Button>
                    <Input id='input' size='mini' placeholder={`x${this.state.placeholder}`} size='mini'/>
                    </Table.Cell>
                    <Table.Cell>
                        <Label color='teal' tag size='medium'>
                                {fm.from(price, { symbol: '$' })}
                        </Label>
                    </Table.Cell>
                    <Table.Cell>{fm.from(price * itemOrder.quantity, { symbol: '$' })}</Table.Cell>
                </Table.Row>
                    
            </>
            )
        }
    }
    
    render(){
            console.log(this.props)
        return(
            <>
                {this.props.farmers.length === 0 ? this.loadingReceiptCard() : this.renderReceiptCard()}
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

        destroyItemOrder: (itemOrderId) => dispatch(destroyItemOrder(itemOrderId))
    
    }
}

export default connect( msp, mdp)(ReceiptCard);
