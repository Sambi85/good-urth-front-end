import React from 'react';
import { Divider, Tab } from 'semantic-ui-react'

const colors = [
    'red',
  ]
  
  const panes = [
    {
      menuItem: 'Order History',
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
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
            {/* <select onChange={this.handleColorChange}>
              {_.map(colors, (c) => (
                <option key={c} value={c}>
                  {_.startCase(c)}
                </option>
              ))}
            </select> */}
    
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