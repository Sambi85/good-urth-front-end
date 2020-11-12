import React from 'react';
import { connect } from 'react-redux'
import { getMarkets } from '../redux/actions'

class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMarkets()
    }

    render(){
        return (
            <>HomeContainer</>
        )
    }

}

 const msp = (state) => {
 console.log("current Redux state:", state)
 return {markets: state.markets}
}

const mdp = (dispatch) => {
return {fetchMarkets: () => dispatch(getMarkets())}
}

export default connect(msp, mdp)(HomeContainer)