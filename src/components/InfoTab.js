import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import InfoTabRows from './InfoTabRows.js'
import { Divider, Tab, Table } from 'semantic-ui-react'

const colors = [
    'olive',
  ]
  
const panes = [
    {
      menuItem: 'Order History',
      render: () => <Tab.Pane attached={false}>
        <div>
    {colors.map((color) => (
      <Table color={color} key={color} sortable={true} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Farm</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Let's Go</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            <InfoTabRows/>
            {this.rowsWithIds()}
        </Table.Body>
      </Table>
    ))}
  </div>
      </Tab.Pane>,
    },
    {
      menuItem: 'Feed',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    }
  ]

const rowsWithIds = () => {
  let paid = this.props.itemOrders.map(element => element.paid === true)
  let infoTabRows = paid.map(element => <InfoTabRows key={element.id} id={element.id}/>) 
  return infoTabRows
}

class InfoTab extends React.Component {

    state = { 
        color: colors[0] 
    }

    handleColorChange = (e) => 
        this.setState({ 
            color: e.target.value 
    })

    render() {
        const { color } = this.state
        
        return(
            <div>
              
    
            <Divider hidden />
    
            <Tab
              menu={{ color, inverted: true, attached: false, tabular: false }}
              panes={panes}
            />
          </div>
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
 
export default connect(msp, null)(withRouter(InfoTab)); 