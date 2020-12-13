import React from 'react';
import { connect } from 'react-redux'
import { getMarkets } from '../redux/actions'
import MarketCard from '../cards/MarketCard.js'

import { Checkbox, Grid, Segment } from 'semantic-ui-react'

class MarketList extends React.Component {
    
    state = {
        markets:[],
        toggle: false
    }
    
    componentDidMount() {
        this.props.fetchMarkets();
        
        this.setState({
            markets: this.props.markets
        })
    }
    
    // Toggles //
    
    allToggle = () => <Checkbox id='all' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    manhattanToggle = () => <Checkbox id='manhattan' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    brooklynToggle = () => <Checkbox id='brooklyn' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    bronxToggle = () => <Checkbox id='bronx' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    queensToggle = () => <Checkbox id='queens' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    statenIslandToggle = () => <Checkbox id='statenIsland' toggle={this.state.toggle} onClick={this.clickHandler} toggle/>
    
    
    // Iterator // 
    
    mainIterator = () => {

        return  this.state.markets.map(market => <MarketCard key={market.id} market={market} id={market.id}/>)
    }

    // Event Handlers for Toggles //
    
    clickHandler = (event) => {
    
        let manhattan = this.props.markets.filter(element => element.borough === 'New York')
        let brooklyn = this.props.markets.filter(element => element.borough === 'Kings')
        let bronx = this.props.markets.filter(element => element.borough === 'Bronx')
        let queens = this.props.markets.filter(element => element.borough === 'Queens')
        let statenIsland = this.props.markets.filter(element => element.borough === 'Richmond')

        if (this.state.toggle === true ) {
                this.setState({
                    toggle: !this.state.toggle,
                    markets: []
                })

        } else {

             switch (event.target.id) {

                case "all" :
                    this.setState({
                       toggle: !this.state.toggle,
                       markets: this.props.markets
                })
                break;

                case "manhattan" :
                     this.setState({
                        toggle: !this.state.toggle,
                        markets: manhattan
                    })
                break;

                case "brooklyn" :
                    this.setState({
                       toggle: !this.state.toggle,
                       markets: brooklyn
                    })
                break;

                case "bronx" :
                    this.setState({
                       toggle: !this.state.toggle,
                       markets: bronx
                    })
                break;

                case "queens" :
                    this.setState({
                       toggle: !this.state.toggle,
                       markets: queens
                    })
                break;

                case "statenIsland" :
                    this.setState({
                       toggle: !this.state.toggle,
                       markets: statenIsland
                    })
                break;
            
                default:
                    console.log("default!")
                    break;
            };
        };
    };

    render() { 
    
        return(
                <>          
                    <Grid.Column columns={1}>
                        <Segment textAlign='center'>
                        <div align='center'>
                            <span>All {this.allToggle()}</span>
                            <span>Brooklyn {this.brooklynToggle()}</span>
                            <span>Bronx {this.bronxToggle()}</span>
                            <span>Manhattan {this.manhattanToggle()}</span>
                            <span>Queens {this.queensToggle()}</span>
                            <span>Staten Island {this.statenIslandToggle()}</span>
                        </div>
                        </Segment>
                    </Grid.Column>

                    <Grid container columns={4}>
                        {this.mainIterator()}
                    </Grid>
                </>
        )
    };
};

const msp = (state) => {
    return {
           markets: state.markets
      }
   }
   
const mdp = (dispatch) => {
   return {
       fetchMarkets: () => dispatch(getMarkets())
      }
   }
   
export default connect(msp, mdp)(MarketList); 
