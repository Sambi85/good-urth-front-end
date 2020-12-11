import React from 'react';
import { connect } from 'react-redux'
import { getMarkets } from '../redux/actions'
import store from '../redux/store';
import MarketCard from '../cards/MarketCard.js'
import { Checkbox, Grid, Segment } from 'semantic-ui-react'

const markets = store.getState().markets

class MarketList extends React.Component {
    
    state = {
        markets:[],
        toggle: false
    }
    
    componentDidMount() {
        const fetchedMarkets = this.props.fetchMarkets();
    }
    
    // Toggles //

    allToggle = () => <Checkbox id='all' toggle={this.state.toggle} onClick={this.allClickHandler} toggle/>
    manhattanToggle = () => <Checkbox id='manhattan' toggle="false" onClick={this.manhattanClickHandler} toggle/>
    brooklynToggle = () => <Checkbox id='brooklyn' toggle={this.state.brooklynToggle} onClick={this.brooklynClickHandler} toggle/>
    bronxToggle = () => <Checkbox id='bronx' toggle={this.state.toggle} onClick={this.bronxClickHandler} toggle/>
    queensToggle = () => <Checkbox id='queens' toggle={this.state.toggle} onClick={this.queensClickHandler} toggle/>
    statenIslandToggle = () => <Checkbox id='statenIsland' toggle={this.state.toggle} onClick={this.statenIslandClickHandler} toggle/>
    

    // Iterator // 

    mainIterator = () => {

        return  this.state.markets.map(market => <MarketCard key={market.id} market={market} id={market.id}/>)
    }

    // Event Handlers for Toggles //
    
    allClickHandler = (event) => {

       if (this.state.toggle === true ) {
           this.setState({
               toggle: !this.state.toggle,
               markets: []
           })

       } else {
           this.setState({
               toggle: !this.state.toggle,
               markets: markets
           })
       }
    }

    manhattanClickHandler = () => {
        
       let manhattan = markets.filter(element => element.borough === 'New York')

       if (this.state.toggle === true ) {
        this.setState({
            toggle: !this.state.toggle,
            markets: []
        })

        } else {
            this.setState({
                toggle: !this.state.toggle,
                markets: manhattan
            })
        }
    }

    brooklynClickHandler = () => {
        
        let brooklyn = markets.filter(element => element.borough === 'Kings')

        if (this.state.toggle === true ) {

        this.setState({
            toggle: !this.state.toggle,
            markets: []
        })
    
        } else {
        
        this.setState({
            toggle: !this.state.toggle,
            markets: brooklyn
        })
    }

    }

    bronxClickHandler = () => {
        
        let bronx = markets.filter(element => element.borough === 'Bronx')

        if (this.state.toggle === true ) {

            this.setState({
                toggle: !this.state.toggle,
                markets: []
        })

        } else {
            this.setState({
                toggle: !this.state.toggle,
                markets: bronx
            })

        }


    }

    queensClickHandler = () => {
    
        let queens = markets.filter(element => element.borough === 'Queens')
        
        if (this.state.toggle === true ) {

            this.setState({
                toggle: !this.state.toggle,
                markets: []
            })

        } else {
            
            this.setState({
                toggle: !this.state.toggle,
                markets: queens
            })

        }


    }

    statenIslandClickHandler = () => {
    
        let statenIsland = markets.filter(element => element.borough === 'Richmond')

        if (this.state.toggle === true ) {
        
            this.setState({
                toggle: !this.state.toggle,
                markets: statenIsland
            })

        } else {
            this.setState({
                toggle: !this.state.toggle,
                markets: statenIsland
            })
        }


    }

    render() { 
        // console.log(this.state.toggle)
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
