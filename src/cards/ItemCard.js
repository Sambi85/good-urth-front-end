import React from 'react';
import { connect } from 'react-redux'
import { Button, Card, Dimmer, Form, Grid, Icon, Image, Input, Label, Loader, Segment } from 'semantic-ui-react'

// converts to money //
const { FormatMoney } = require('format-money-js');
const fm = new FormatMoney({
  decimals: 2
});

class ItemCard extends React.Component {

    state = {
        placeholder: 0,
        orderId: 0
    }

    targetItem = () => {

       let target = this.props.items.filter(item => item.id === this.props.id)
        
       return target[0]
    }
    

    parsedPrice = () => {
        
       return fm.from(parseInt(this.targetItem().price), { symbol: '$' })
    
    }

    soldOut = (boolean) => {
        
        if (boolean === true) {

            return <Label size='huge' color='red'>Sold Out</Label>

        } else if (boolean === false) {

            return <Label size='small' color='green'>In stock</Label>
        }
    }

    itemCounter = () => {
    
       return this.targetItem().stock_amount
    }

    increment = (event) => {

        if (this.state.placeholder >= this.targetItem().stock_amount) {

            this.setState({
                placeholder: this.targetItem().stock_amount
            })

        } else {

            this.setState({
                placeholder: this.state.placeholder += 1
            })
        }
    }

    decrement = (event) => {
            
        if (this.state.placeholder <= 0) {

            this.setState({
                placeholder: 0
            })

        } else {

            this.setState({
                placeholder: this.state.placeholder -= 1
            })
        }
    }

    changeHandler = (event) => {

        let str = event.target.value 
        let matches = str.match(/(\d+)/);
        console.log("matches:", matches.input)

        if (matches.input <= this.targetItem().stock_amount) {
                console.log('matches inside:', matches.input)
            this.setState({
                
                placeholder: matches.input
            
            })
        } else if (matches.input > this.targetItem().stock_amount || matches.input < 0 ){

            this.setState({
                
                placeholder: 0
                
            })

            event.target.value = 0;
        }
    }

    addToCart = (event) => {

        return this.submitHandler(this.props.currentUser[0].id)
    }

   async submitHandler() {

            let orderOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({
                    
                    user_id: this.props.currentUser[0].id,
                    subtotal: this.props.targetItem().price,
                    tax: 0,
                    total: 0,
                    pick_up: "t"
                    
                })
            }
            
        const order = await fetch(`http://localhost:4000/orders`, orderOptions)
                .then(response => response.json())
                .then(orderData => {
                
                console.log("posted an order:", orderData.id)
                
                    this.setState({
                        orderId: orderData.id
                })
            });
            this.order = order;
            


            let itemOrdersOptions = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({

                    item_id: this.targetItem().id,
                    order_id: this.state.orderId,
                    quantity: this.state.placeholder,
                    paid: false
                
                })
            }

        const itemOrder = await fetch(`http://localhost:4000/item_orders`, itemOrdersOptions)
            .then(response => response.json())
            .then(itemOrderData => {
                console.log("itemOrders:", itemOrderData)
                this.setState({
                    placeholder: 0,
            })  
        })    
    }
        
    loadingItemCard = () => {
            
            return (
                <div>
               <Segment>
                 <Dimmer active>
                   <Loader indeterminate>Preparing ItemCard... </Loader>
                 </Dimmer>
           
                 <Image src='/images/wireframe/short-paragraph.png' />
               </Segment>
             </div>
   )
    }

    renderItemCard = () => {
  
    return (
        
        <Grid.Column>
                <Card>  
                    <Image src={this.targetItem().url} wrapped ui={false} />
                    
                    <Card.Content>
                        <Card.Header>
                            {this.soldOut(this.targetItem().item_pulled)}  {this.targetItem().name}
                        </Card.Header>
                
                        <Card.Meta>                     
                            <span className='number'>{ this.parsedPrice() } per {this.targetItem().purchase_unit} </span>
                            <p> Count: {this.itemCounter()}</p>
                        </Card.Meta>

                    
                        <Card.Description>
                            <Form>
                                <Form.Field>
                                    <Input onChange={this.changeHandler} size="mini" id='input' fluid='true' placeholder={this.state.placeholder}/>
                        
                                <Button.Group fluid='true'>
                                    <Button onClick={this.decrement}><Icon name='triangle down'/></Button>
                                    <Button onClick={this.increment}><Icon name='triangle up'/></Button>
                                </Button.Group>
                                    <Button  onClick={this.addToCart} className='add' color='green' fluid='true' name='submit'>Add to Cart</Button>
                                </Form.Field>
                            </Form>
                        </Card.Description>

                    </Card.Content>
                </Card>
            </Grid.Column>
    )

    }
    
    render() {
            console.log(this.props.items)
        return (
                <>
                    {this.props.items.length === 0 ? this.loadingItemCard() : this.renderItemCard()}
                </>
        )
    }   
}

const msp = (state) => {
    return {
        currentUser: state.currentUser,
        items: state.items
      }
   }
   
export default connect(msp, null)(ItemCard); 