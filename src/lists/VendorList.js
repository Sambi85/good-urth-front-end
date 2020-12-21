import React from 'react';
import { connect } from 'react-redux'
import { getSchedules } from '../redux/actions'
import { Dimmer, Grid, Loader, Image, Segment } from 'semantic-ui-react'
import VendorCard from '../cards/VendorCard.js'

class VendorList extends React.Component {

    componentDidMount() {

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

        let num = this.props.id === '' ? this.props.farmerId : +this.props.id 

        let farmer = this.props.schedules.filter(element => element.market_id === parseInt(num))

        let farmerId = farmer[0].farmer_id
        let filteredFarmers = this.props.farmers.filter(element => element.id === farmerId)

        return filteredFarmers.map(vendor => <VendorCard key={vendor.id} vendor={vendor} />)
    }

    render() {
        // console.log("VendorList PROPS:", this.props)
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
   
const mdp = (dispatch) => {
   return {

            fetchSchedules: () => dispatch(getSchedules())
      }
   }
   
export default connect(msp, mdp)(VendorList);