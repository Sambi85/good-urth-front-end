import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

class MarketCard extends React.Component {

    parsePhoneNumber = () => {
        let cleaned = ('' + this.props.market.phone_number).replace(/\D/g, '')
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        
        return null
      }


    render(){
        return(
            <>
             <Grid.Column>
                <Card>
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
                
                    <Card.Content extra>
                        {/* <a>
                        <Icon name='user' />
                        22 Friends
                        </a> */}
                    </Card.Content>
                </Card>
            </Grid.Column>
            </>
        )
    };
};

export default MarketCard;