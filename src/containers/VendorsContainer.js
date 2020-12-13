import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import VendorDashboard from '../Dashboard/VendorDashboard.js'
import VendorList from '../lists/VendorList.js'

class VendorsContainer extends React.Component {

    render(){
        return (
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <VendorDashboard/>  
                        </Grid.Column>
                            <VendorList/>
                    </Grid.Row>
                </Grid>
            )
        }
    }

export default withRouter(VendorsContainer); 