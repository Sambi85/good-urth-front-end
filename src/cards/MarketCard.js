import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class MarketCard extends React.Component {

    parsePhoneNumber = () => {
        let cleaned = ('' + this.props.market.phone_number).replace(/\D/g, '')
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        
        return null
      }

    marketClickHandler = () => {

     this.props.history.push(`/markets/${this.props.market.id}`)
    
    }

    render(){

        return(
            <>
             <Grid.Column>
                <Card onClick={this.marketClickHandler}>  
                    <Image src='https://previews.123rf.com/images/cosmaa/cosmaa1805/cosmaa180500171/102272550-vector-cartoon-illustration-of-market-stall-on-white-background-.jpg' wrapped ui={false} />
                    
                    <Card.Content>
                        <Card.Header>{this.props.market.name}</Card.Header>
                
                        <Card.Meta>
                            <span className='number'> {this.parsePhoneNumber()}</span>
                        </Card.Meta>
      
                        <Card.Description>
                            Location: {this.props.market.location}
                        </Card.Description>

                    </Card.Content>
                </Card>
            </Grid.Column>
            </>
        )
    };
};

export default withRouter(MarketCard);