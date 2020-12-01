import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

class header extends React.Component {

    render() {
        return(
            <>
                <Header as='h2' block>
                    <Icon name='food' />
                    <Header.Content>Good Earth</Header.Content>
                </Header>
            </>
        )
    }
}

export default header; 