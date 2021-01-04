import React from 'react';
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
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Farm</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
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

export default InfoTab