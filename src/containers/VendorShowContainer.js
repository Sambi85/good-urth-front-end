import React from 'react';
import { withRouter } from 'react-router-dom';
import VendorShowList from '../lists/VendorShowList.js';
import VendorShowDashboard from '../Dashboard/VendorShowDashboard.js';


class VendorShowContainer extends React.Component {

    render(){

        return (
            <>
            <VendorShowDashboard/>
            <VendorShowList/>
            </>
        )
    }

}

export default withRouter(VendorShowContainer); 