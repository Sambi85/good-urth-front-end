import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, Dimmer, Grid, Image, Loader, Segment } from 'semantic-ui-react'

class RecentCard extends Component {

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

    return (
    
        <Grid.Column>
                <Card>  
                    <Image src={this.state.item.url} wrapped ui={false} />
                    
                    <Card.Content>
                        <Card.Header>
                         {}
                        </Card.Header>
                
                        <Card.Meta>                     
                            <span>asdads</span>
                            <p>asdasd</p>
                        </Card.Meta>

                    
                        <Card.Description>
                            aasd
                        </Card.Description>

                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }

    render () {
        console.log(this.props.id)
        return(
            <>
                { this.props.farmers ? this.renderRecentCard : this.loadingItemCard }
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