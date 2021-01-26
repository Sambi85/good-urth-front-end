import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemsList from '../lists/ItemsList.js';
import VendorShowDashboard from '../Dashboard/VendorShowDashboard.js';

class VendorShowContainer extends React.Component {

state = {
    pathName: '',
    farmer:[]
}

componentDidMount() {
    
    this.setState({
            pathName: this.props.history.location.pathname
    })
}

    parsePathname = (string) => {
        let fileName = this.props.history.location.pathname.replace(/^.*[\\\/]/, '')
        return fileName
}
    
    render(){
            console.log("this.state VENDORSHOW CONTAINER LEVEL:", this.parsePathname())
        return (
            <>
            <VendorShowDashboard id={this.parsePathname()}/>
            <ItemsList id={this.parsePathname()}/>
            </>
        )
    }
}

export default withRouter(VendorShowContainer); 