import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dimmer, Image, Loader, Segment, Table } from 'semantic-ui-react'

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({ decimals: 2 });

class InfoTabRows extends React.Component {

    loadingInfoTabRows = ()  => {
        return (
            <div>
                <Segment>
                    <Dimmer active>
                        <Loader indeterminate>Loading Payment Dashboard...</Loader>
                    </Dimmer>
            
                    <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>
            </div>
    )

    }

    renderInfoTabRows = ()  => {

        return (
            <>   
                <Table.Row>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>total</Table.Cell>
                    <Table.Cell>date</Table.Cell>
                    <Table.Cell>button</Table.Cell>
                </Table.Row>
            </>
        )
    }

    farmerGrabber = () => {
       let paidItemOrders = this.props.itemOrders.mape()
    }

    totalGrabber = () => {
        
    }

    dateGrabber = () => {

    }

    render() {
        console.log(this.props)
        return (
            <>   
             {this.props.itemOrders ? this.renderInfoTabRows : this.loadingInfoTabRows}
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
   
export default connect(msp, null)(withRouter(InfoTabRows)); 