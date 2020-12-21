import React from 'react';
import { connect } from 'react-redux'
import { Dimmer, Grid, Image, Label, Loader, Rail, Segment, Table } from 'semantic-ui-react'

class VendorShowDashboard extends React.Component {


    currentlyOpen = (boolean) => {
        
        if (boolean === true) {

            return <Label size="huge" color='teal'> Currently Open</Label>

        } else if (boolean === false) {

            return <Label size="huge" color='orange'> Currently Closed</Label>

        }
    }

    officeHours = (string) => {
    
        let slicedString = string.slice(11,16)
        let cleanedString = slicedString.split(':')
        
        let hours = parseInt(cleanedString[0]);
        let minutes = cleanedString[1];

        if (hours > 12) {

            return `${hours- 12}:${minutes} pm` 

        } else if (hours < 12) {

            return `${hours}:${minutes} am` 
        }
    }

    targetFarmer = () => {
    
        let filteredFarmer = this.props.farmers.filter(element => element.id === parseInt(this.props.id));
            
        return filteredFarmer[0]
    }

    loadingFarmersDashboard = () => {

        return(
            <div>
            <Segment>
              <Dimmer active>
                <Loader indeterminate>Preparing Farmer Dashboard...</Loader>
              </Dimmer>
        
              <Image src='/images/wireframe/short-paragraph.png'/>
            </Segment>
          </div>
        )
    }


    renderFarmersDashboard = () => {
            return (

                <Grid>
                <Grid.Column>
                    <Segment>
                        
                        <Image src="https://larrysharpe.com/wp-content/uploads/2018/01/farm.jpg" fluid='true' centered='true' />
                        
                        <Rail attached internal position='left' size='huge'>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell><h1>Welcome Friends !!!</h1></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
    
                                <Table.Body>

                                        <Table.Row>
                                            <Table.Cell>
                                          {this.targetFarmer().username}     
                                            </Table.Cell>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Cell>
                                         Our Bio: <p>{this.targetFarmer().bio}</p>     
                                            </Table.Cell>
                                        </Table.Row>
                                            
                                        <Table.Row>
                                            <Table.Cell>
                                           Days: {this.targetFarmer().days_open}     
                                            </Table.Cell>
                                        </Table.Row>
                                
                                        <Table.Row>
                                            <Table.Cell>
                                                <p>Open:  {this.officeHours(this.props.farmers[0].open)}</p>     
                                                <p>Close: {this.officeHours(this.props.farmers[0].close)}</p>     
                                            </Table.Cell>
                                        </Table.Row>
    
                                        <Table.Row>
                                            <Table.Cell textAlign="center">
                                                {this.currentlyOpen(this.props.farmers[0].is_open)}         
                                           </Table.Cell>
                                        </Table.Row>
    
                                    </Table.Body>
                                </Table>
                            </Rail>
                        
                            <Rail attached internal position='right' size='huge'>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                        <Table.HeaderCell>
                                                <h1>Contact Info.</h1>
                                        </Table.HeaderCell>
                                        </Table.Row>    
                                    </Table.Header>
    
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                          phone: {this.targetFarmer().phone_number}     
                                        </Table.Cell>
                                    </Table.Row>
    
                                    <Table.Row>
                                        <Table.Cell>
                                            email: {this.targetFarmer().email}   
                                        </Table.Cell>
                                    </Table.Row>
    
                                    <Table.Row> 
                                        <Table.Cell>
                                            mail: {this.targetFarmer().address}
                                        </Table.Cell>
                                    </Table.Row>

                                </Table.Body>
                            </Table>
                            </Rail>
    
                    </Segment>
                </Grid.Column>
            </Grid>
                
        )
    }

    render() {
        return (
            <>
              {this.props.farmers.length === 0 ? this.loadingFarmersDashboard() : this.renderFarmersDashboard()}
            </>
        )
    }
}

const msp = (state) => {
    return {
           farmers: state.farmers
      }
   }

export default connect(msp, null)(VendorShowDashboard); 