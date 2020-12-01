import React from 'react';
import { Header, Icon } from 'semantic-ui-react'


class NavBar extends React.Component {
    render() {
        return(
            <div>
                <Header as='h2' block>
                    <Icon name='food'/>
                    <Header.Content>Good Urth</Header.Content>
                </Header>
                    
            </div>
        )
    }

}

export default NavBar; 