import React from 'react';
import { connect } from 'react-redux'
import { getFarmers, getSchedules } from '../redux/actions'
import { Dimmer, Grid, Loader, Image, Segment } from 'semantic-ui-react'
import VendorCard from '../cards/VendorCard.js'

class VendorList extends React.Component {

    componentDidMount() {

        this.props.fetchFarmers();
        this.props.fetchSchedules();
    }

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
        
        let filteredFarmers = this.props.farmers.filter(element => element.id === this.props.schedules.farmer_id)

        // return filteredFarmers.map(vendor => <VendorCard key={vendor.id} vendor={vendor} id={vendor.id}/>)
        return this.props.farmers.map(vendor => <VendorCard key={vendor.id} vendor={vendor} id={vendor.id}/>)
    }

    render() {
        return(
            <>
                <Grid container columns={4}>
                    {this.props.farmers.length === 0 ? this.loadingVendorCard() : this.renderVendorCard()}
                </Grid>
            </>
        )
    }

}

const msp = (state) => {
    return {
           farmers: state.farmers,
           schedules: state.schedules
      }
   }
   
const mdp = (dispatch) => {
   return {
            fetchFarmers: () => dispatch(getFarmers()),
            fetchSchedules: () => dispatch(getSchedules())
      }
   }
   
export default connect(msp, mdp)(VendorList);