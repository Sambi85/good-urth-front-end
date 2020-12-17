import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemsList from '../lists/ItemsList.js';
import VendorShowDashboard from '../Dashboard/VendorShowDashboard.js';

class VendorShowContainer extends React.Component {

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
            <>
            <VendorShowDashboard id={this.parsePathname()}/>
            <ItemsList id={this.parsePathname()}/>
            </>
        )
    }

}

export default withRouter(VendorShowContainer); 