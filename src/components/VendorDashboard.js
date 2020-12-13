import React from 'react';
import { connect } from 'react-redux'
import { getMarkets } from '../redux/actions'
import { Dimmer, Grid, Image, Loader, Rail, Segment, Table } from 'semantic-ui-react'

class VendorDashboard extends React.Component {

    componentDidMount() {

        this.props.fetchMarkets();
    }

    parsePhoneNumber = () => {
        let cleaned = ('' + this.props.markets[0].phone_number).replace(/\D/g, '')
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        
        return null
      }

    answerConverter = (string) => {
        if (string.toLowerCase() === "y") {
        
            return "Yes";
        
        } else if (string.toLowerCase() === "n") {
            
            return "No"
        } else {

            return "Not Declared"
        }

    }

    operationsConverter = (string) => {

            if (string === "P") {
               
                return "Open in the Spring/Summer"
            
            } else if (string === "YR") {
                
                return "Year Round"

            } else if (string === "X") {

                return "Open till December"

            } else if (string === "W") {

                return "Open thru the Winter"
            }
    }
    // <p>{this.props.markets[0].operation_months_code}</p>

    loadingVendorDashboard = () => {
        return (
            <div>
            <Segment>
              <Dimmer active>
                <Loader indeterminate>Preparing Files</Loader>
              </Dimmer>
        
              <Image src='/images/wireframe/short-paragraph.png' />
            </Segment>
          </div>
        )
    }

    renderVendorDashboard = () => {
        return (
            <Grid>
            <Grid.Column>
                <Segment>
                    
                    <Image src="https://thecounter.org/wp-content/uploads/2019/07/farmers-market-pharmacy-prescription-new-york-city-hypertension-july-2019.jpg" fluid='true' centered='true' />
                    
                    <Rail attached internal position='left' size='huge'>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell><h1>{this.props.markets[0].name}</h1></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                        <p>Hours: {this.props.markets[0].hours_of_operation}</p>
                                        </Table.Cell>
                                    </Table.Row>
                                        
                                    <Table.Row>
                                        <Table.Cell>
                                            <p>Contact: {this.props.markets[0].contact}</p>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <p>Number: {this.parsePhoneNumber()}</p>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <p>Website: {this.props.markets[0].url}</p>
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
                                            <h1>Location</h1>
                                    </Table.HeaderCell>
                                    </Table.Row>    
                                </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <p>{`${this.props.markets[0].address} New York, New York, ${this.props.markets[0].zip}`}</p>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>
                                        <p> Seasons Open: {this.operationsConverter(this.props.markets[0].operation_month_code)}</p>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell>
                                        <p>FMNP status: {this.answerConverter(this.props.markets[0].fmnp)}</p>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row> 
                                    <Table.Cell>
                                        <p>Snap Status: {this.answerConverter(this.props.markets[0].snap_status)}</p>
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
        return(
            <>
              {this.props.markets.length === 0 ? this.loadingVendorDashboard() : this.renderVendorDashboard()}
            </>
        )
    }
}

const msp = (state) => {
    return {
           markets: state.markets
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchMarkets: () => dispatch(getMarkets())
      }
   }

export default connect(msp, mdp)(VendorDashboard); 