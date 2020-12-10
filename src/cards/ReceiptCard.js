import React from 'react';
import store from '../redux/store';
import { Button, Icon, Input, Label, Table } from 'semantic-ui-react';

class ReceiptCard extends React.Component {
    
    state = {
        farmerName: ""
    };

    componentDidMount() {
        fetch(`http://localhost:4000/farmers/${this.props.farmerId}`)
        .then(response => response.json())
        .then(farmerData =>
            
            this.setState({
                farmerName: farmerData.username
            })
        )    
    }

    render(){

        return(
            <>
                <Table.Row>

                    <Table.Cell>  <Button icon color='red'>
    <Icon name='close' color='white' />
  </Button></Table.Cell>
                    <Table.Cell>{this.props.name}</Table.Cell>
                    <Table.Cell>{this.state.farmerName}</Table.Cell>  
                    <Table.Cell>{this.props.unit}</Table.Cell>
                    <Table.Cell>
                        <Button icon color='olive' circular='true' size='mini'>
                            <Icon name='left arrow' />
                        </Button>
                        <Input size='mini' placeholder={`x${this.props.quantity}`} />
                        <Button icon color='olive' circular='true' size='mini'>
                            <Icon name='right arrow'/>
                        </Button>
                    </Table.Cell>
                    <Table.Cell>{`$${this.props.price}`}</Table.Cell>
                    <Table.Cell>{`$${this.props.price * this.props.quantity}`}</Table.Cell>
                    
                </Table.Row>
            </>
        )
    }
}

export default ReceiptCard;