import React from 'react';
import { Label, Table } from 'semantic-ui-react';
import { Grid, Image, Icon, Rail, Segment } from 'semantic-ui-react'

class PaymentStats extends React.Component {
    render() {
        return (
            <>      
            <Grid centered columns={3}>
                <Grid.Column>
                    <Segment>
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg' />

                        <Rail close position='left'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                    <Table.HeaderCell>Ready to Saddle Up ?</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Label ribbon color='red'>Grand Total: $ 10.00</Label>
                                        </Table.Cell>
                                    </Table.Row>
                                <Table.Row>
                                
                                <Table.Cell>Sub Total: $9.00</Table.Cell>
                                    </Table.Row>
                                    
                                    <Table.Row>
                                        <Table.Cell>Taxes: $1.00</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>

                        </Rail>

                        <Rail close position='right'>
                            
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