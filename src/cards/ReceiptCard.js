import React from 'react';
import { connect } from 'react-redux'
import { increment, getFarmers } from '../redux/actions'
import { Dimmer, Button, Icon, Input, Image, Label, Loader, Table, Segment } from 'semantic-ui-react';

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
    decimals: 2
});

class ReceiptCard extends React.Component {
        
    componentDidMount() {

            return (
               this.props.fetchFarmers(),
               this.props.itemOrderIdGrabber(this.props.itemOrder.id),
               this.props.orderIdGrabber(this.props.itemOrder.order.id)
        )        
    }
                                            
    deleteButton = () => {
                                                
                     return this.props.delete()
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
    
    renderReceiptCard = () => {
        
        return (
            <>

                <Table.Row>
                    <Table.Cell>  <Button onClick={this.deleteButton}  color='red'> <Icon name='close' color='white' /></Button> </Table.Cell>
                    <Table.Cell>{this.props.itemOrder.item.name}</Table.Cell>
                        {this.props.farmers.length === 0 ? this.loadingFarmerGrabber() : this.renderFarmerGrabber()}
                    
                    <Table.Cell><Label size='large'>{this.props.itemOrder.item.purchase_unit}</Label> </Table.Cell>
                    <Table.Cell>
                        <Button  icon size='mini'>
                            <Icon name='left arrow'/>
                        </Button>
                        <Button icon size='mini'>
                            <Icon onClick={this.props.increment(this.props.itemOrder)} name='right arrow'/>
                        </Button>
                    <Input size='mini' placeholder={`x${this.props.itemOrder.quantity}`} size='mini'/>
                    </Table.Cell>
                    <Table.Cell>
                        <Label color='teal' tag size='medium'>
                                {fm.from(parseInt(this.props.itemOrder.item.price), { symbol: '$' })}
                        </Label>
                    </Table.Cell>
                    <Table.Cell>{fm.from(parseInt(this.props.itemOrder.item.price) * this.props.itemOrder.quantity, { symbol: '$' })}</Table.Cell>
                </Table.Row>
            </>
        )
    }
    
    render(){
        console.log("receipt card PRICE",this.props.itemOrder.item.price)
        console.log("receipt card UNIT",this.props.itemOrder.item.purchase_unit)
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
        increment: (item) => dispatch(increment(item)),
        fetchFarmers: () => dispatch(getFarmers()),
    }
}

export default connect( msp, mdp)(ReceiptCard);
