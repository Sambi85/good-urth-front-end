import React from 'react';
import { Label, Table } from 'semantic-ui-react';
import { Button, Grid, Image, Icon, Rail, Segment } from 'semantic-ui-react'

class PaymentStats extends React.Component {
    render() {
        return (
            <>   
            <Grid>
                <Grid.Column>
                    <Segment>
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg' fluid='true' centered='true' />
                        <Rail attached internal position='left' size='huge'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Ready to Saddle Up ?</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Label ribbon color='red' size='huge'>Grand Total: $ 10.00</Label>
                                        </Table.Cell>
                                    </Table.Row>
                                <Table.Row>
                                
                                <Table.Cell>Sub Total: $9.00</Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Taxes: $1.00</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                        <Button positive>Checkout</Button>
                                        <Button negative>Empty Cart</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Rail>
                        
                            <Rail attached internal position='right' size='huge'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Default Payment Option</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Label><Icon name='credit card'/>Card: MasterCard</Label>
                                        </Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                            <Table.Cell>
                                                <p>Name:</p>Tobi Buttercream
                                            </Table.Cell>
                                    </Table.Row>

                                    <Table.Row> 
                                        <Table.Cell>Ending in... XXXX</Table.Cell>
                                    </Table.Row>
                                
                                        
                                    <Table.Row>
                                        <Table.Cell><p>Billing address:</p> 91st street, Apt. 3a, New York 10036</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            </Rail>

                    </Segment>
                </Grid.Column>
            </Grid>
        </>
        )
    }
}

export default PaymentStats;