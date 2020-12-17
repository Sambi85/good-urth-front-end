import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import VendorDashboard from '../Dashboard/VendorDashboard.js'
import VendorList from '../lists/VendorList.js'

class VendorsContainer extends React.Component {

    state = {
        pathName: ''
    }
    
    componentDidMount() {
        
        this.setState({
                pathName: this.props.history.location.pathname
        })
    }
    
        parsePathname = () => {
            let fileName = this.state.pathName.replace(/^.*[\\\/]/, '')
            return fileName
    }

    render(){
        
        return (
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <VendorDashboard id={this.parsePathname()}/>  
                        </Grid.Column>
                            <VendorList id={this.parsePathname()}/>
                    </Grid.Row>
                </Grid>
            )
        }
    }

export default withRouter(VendorsContainer); 