import React from 'react';
import { connect } from 'react-redux'
// import { getSchedules } from '../redux/actions'
import { Dimmer, Grid, Loader, Image, Segment } from 'semantic-ui-react'
import VendorCard from '../cards/VendorCard.js'

class VendorList extends React.Component {

    loadingVendorCard = () => {
       return (
                <div>
                    <Segment>
                    <Dimmer active>
                        <Loader indeterminate>Preparing Files</Loader>
                    </Dimmer>
                
                    <Image src='/images/wireframe/short-paragraph.png' />
                    </Segment>
                </div>
       )
    }

    renderVendorCard = () => {

        let num = this.props.id === '' ? this.props.farmerId : +this.props.id 
    
        let targetSchedule = this.props.schedules.filter(element => element.market_id === num)  //HERE --------------------------- 
            
        let farmerId = targetSchedule[0].farmer_id
        let filteredFarmers = this.props.farmers.filter(element => element.id === farmerId)
        return filteredFarmers.map(vendor => <VendorCard key={vendor.id} vendor={vendor} />)
    }

    render() {
        console.log("VendorList PROPS:", this.props)
        return(
            <>
                <Grid container columns={4}>
                    {this.props.schedules.length === 0 ? this.loadingVendorCard() : this.renderVendorCard()}
                </Grid>
            </>
        )
    }
}

const msp = (state) => {
    return {
           farmers: state.farmers,
           farmerId: state.farmerId,
           schedules: state.schedules
           
      }
   }
   

export default connect(msp, null)(VendorList);