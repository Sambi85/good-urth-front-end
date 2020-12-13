import React from 'react';
import { Button, Icon, Input, Label, Table } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { getFarmers } from '../redux/actions'


const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
  decimals: 2
});

class ReceiptCard extends React.Component {
    
    componentDidMount() {

        this.props.fetchFarmers();    
        
    }

    farmerGrabber = () => {
      let farmerName = this.props.farmers.filter(element => element.id === this.props.farmerId);
        return farmerName.username
    }

    render(){
        return(
            <>
                <Table.Row>

                    <Table.Cell>  <Button icon color='red'> <Icon name='close' color='white' /></Button> </Table.Cell>
                    <Table.Cell>{this.props.name}</Table.Cell>
                    <Table.Cell>{this.farmerGrabber()}</Table.Cell>  
                    <Table.Cell><Label size='large'>{this.props.unit}</Label> </Table.Cell>
                    <Table.Cell>
                        <Button icon color='olive' circular='true' size='mini'>
                            <Icon name='left arrow' />
                        </Button>
                        <Button icon color='olive' circular='true' size='mini'>
                            <Icon name='right arrow'/>
                        </Button>
                    <Input size='mini' placeholder={`x${this.props.quantity}`} size='mini'/>
                    </Table.Cell>
                    <Table.Cell><Label tag size='medium'>{`$${this.props.price}`}</Label></Table.Cell>
                    <Table.Cell>{fm.from(this.props.price * this.props.quantity, { symbol: '$' })}</Table.Cell>
                </Table.Row>
            </>
        )
    }
}

const msp = (state) => {
    return {
           farmers: state.farmers,
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchFarmers: () => dispatch(getFarmers())
      }
   }
   
export default connect(msp, mdp)(ReceiptCard); 