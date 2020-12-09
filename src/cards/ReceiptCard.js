import React from 'react';
import store from '../redux/store';
import { Label, Table } from 'semantic-ui-react'

class ReceiptCard extends React.Component {

    render(){
        return(
            <>
           <h1>Blue Bell Farms</h1>
              <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Price per unit</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Tomato</Table.Cell>
                            <Table.Cell>x1</Table.Cell>
                            <Table.Cell>$5.99</Table.Cell>
                            <Table.Cell><Label ribbon color='green'>Sub Total: $ 10.00</Label></Table.Cell>
                        </Table.Row>
                    </Table.Body>
            </Table>
            </>
        )
    }
}

export default ReceiptCard;