import React from 'react';
// import { connect } from 'react-redux'
// import { getMarkets } from '../redux/actions'
// import { getUsers } from '../redux/actions'
import Dashboard from '../components/Dashboard.js'
// import store from '../redux/store';

class HomeContainer extends React.Component {

    // componentDidMount() {
    //     // this.props.fetchMarkets(),
    //     this.props.fetchUsers()
    // }

    render(){
        // console.log("test:", store.getState().users[0].username)
        return (
           
            <>
            HomeContainer
            <br/><br/><Dashboard/>
            </>
        )
    }
}

//  const msp = (state) => {
//  return {
//         // markets: state.markets,
//         users: state.users
//     }
// }

// const mdp = (dispatch) => {
// return {
//     // fetchMarkets: () => dispatch(getMarkets()),
//     fetchUsers: () => dispatch(getUsers())
//     }
// }

export default HomeContainer