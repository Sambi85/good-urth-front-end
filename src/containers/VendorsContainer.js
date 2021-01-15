import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import VendorDashboard from '../Dashboard/VendorDashboard.js'
import VendorList from '../lists/VendorList.js'

class VendorsContainer extends React.Component {


    render(){
        console.log(this.props )
        return (
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <VendorDashboard id={ this.props.history.location.pathname.includes('farmers') ? '' : this.props.history.location.pathname.replace(/^.*[\\\/]/, '')}/>  
                        </Grid.Column>
                            <VendorList id={ this.props.history.location.pathname.includes('farmers') ? '' : this.props.history.location.pathname.replace(/^.*[\\\/]/, '')}/>
                    </Grid.Row>
                </Grid>
            )
        }
    }

export default withRouter(VendorsContainer); 