import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Divider, Dimmer, Grid, Image, Label, Loader, Segment } from 'semantic-ui-react'

class RecentCard extends React.Component {

    loadingItemCard = () => {
 
    return (
         <div>
            <Segment>
            <Dimmer active>
                <Loader indeterminate>Preparing RecentCards... </Loader>
            </Dimmer>

            <Image src='/images/wireframe/short-paragraph.png' />
            </Segment>
        </div>
        )
    }
    
    renderRecentCard = () => {
    
        let farmer = this.props.farmers.filter(element => element.id === this.props.id)
        console.log("farmer:",farmer)
        let src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRW55xnYRS92Xk-J3y6GN5XSPHF3lg_g_0g&usqp=CAU"
    
    return (
    
        <Grid.Column>
            <div>
                <Image src={src} size='tiny' verticalAlign='middle' />
                    <Label color='green' ribbon>{`Total: $10.00` }</Label>
                    <Label color='grey'>{farmer[0].username}</Label>
                    <Label color='blue'> Let's Go </Label>
                <Divider />
            </div>
        </Grid.Column>
        )
    }

    render () {
        console.log("RecentCard PROPS:", this.props)
        return(
            <>
                { this.props.farmers ? this.renderRecentCard(): this.loadingItemCard() }
            </>
        )
    }

}

const msp = (state) => {
    return {
        farmers: state.farmers
      }
   }

export default connect(msp, null)(withRouter(RecentCard)); 