import React from 'react';
import { connect } from 'react-redux'
import { getMarkets } from '../redux/actions'
import store from '../redux/store';
import MarketCard from '../cards/MarketCard.js'
import { Grid } from 'semantic-ui-react'

class MarketList extends React.Component {

    componentDidMount() {

         const fetchedMarket = this.props.fetchMarkets();
    }
    
    marketIterator = () => {
        let markets = store.getState().markets
        return  markets.map(market => <MarketCard key={market.id} market={market}/>)
    }

    render() {
        
        return(
                <>          
                    <Grid container columns={4}>
                        {this.marketIterator()}
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
