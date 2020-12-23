import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { getFarmerId } from '../redux/actions';
class VendorCard extends React.Component {

    vendorClickHandler = () => {
        this.props.getFarmerId(this.props.vendor.id, this.props.history) 
            
    }

    render() {
        console.log('Vendor card PROPS:', this.props)
        return(
            <>
                <Grid.Column>
                    <Card onClick={this.vendorClickHandler}>  
                        <Image src='https://previews.123rf.com/images/cosmaa/cosmaa1805/cosmaa180500171/102272550-vector-cartoon-illustration-of-market-stall-on-white-background-.jpg' wrapped ui={false} />
                        
                        <Card.Content>
                            <Card.Header>{this.props.vendor.username}</Card.Header>
                    
                            <Card.Meta>
                                <span className='number'> {this.props.vendor.phone_number}</span>
                            </Card.Meta>
        
                            <Card.Description>
                            <p>Bio: {this.props.vendor.bio}</p>
                            <p>Hours: {this.props.vendor.days_open}</p>
                            <p>Address: {this.props.vendor.address}</p>
                            <p>Email: {this.props.vendor.email}</p>
                            </Card.Description>

                        </Card.Content>
                    </Card>
                </Grid.Column>
            </>
        )
    }
}
   
const mdp = (dispatch) => {
   return {
            getFarmerId: (id, history) => dispatch(getFarmerId(id, history))
      }
   }
   
export default connect(null, mdp)(withRouter(VendorCard));

