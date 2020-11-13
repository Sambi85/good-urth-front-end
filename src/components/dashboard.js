import React from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions'
import store from '../redux/store';
class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        console.log(store.getState().users[0].username)
        return (
                <> 
                This is the Dashboard ! 
                <p>{store.getState().users[0].username}</p>
                </>
        )
    }
}

const msp = (state) => {
    console.log("current Redux state:", state)
    return {
           users: state.users
       }
   }
   
   const mdp = (dispatch) => {
   return {
       fetchUsers: () => dispatch(getUsers())
       }
   }
   
export default connect(msp, mdp)(Dashboard); 
