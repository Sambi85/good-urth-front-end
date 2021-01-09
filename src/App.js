import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import { connect } from 'react-redux'
import { getFarmers, getCurrentUser, getItemOrders, getItems } from './redux/actions'
import { Image } from 'semantic-ui-react'

// Containers //
import HomeContainer from './containers/HomeContainer.js'
import ExplorerContainer from './containers/ExploreContainer.js'
import OrdersContainer from './containers/OrdersContainer.js'
import OrderHistoryContainer from './containers/OrderHistoryContainer.js'
import SettingsContainer from './containers/SettingsContainer.js'
import VendorsContainer from './containers/VendorsContainer.js'
import VendorShowContainer from './containers/VendorShowContainer.js'

class App extends React.Component {

  componentDidMount() {

    this.props.fetchFarmers();
    this.props.fetchCurrentUser();
    this.props.fetchItemOrders();
    this.props.fetchItems();
 }
  
  render() {
  
      return (
              <div>    
                <NavBar/>
                <Switch>
                <Route exact path="/" render={() => <Image src={'https://wallpaperaccess.com/full/453367.jpg'}/>}/>
                <Route exact path="/home" render={() => <HomeContainer/>}/>
                  <Route exact path="/explore" render={() => <ExplorerContainer/>}/>
                  <Route exact path="/markets/:id" render={() => <VendorsContainer/>}/>
                  <Route exact path="/farmers/:id" render={() => <VendorShowContainer/>}/>
                  <Route exact path="/orders" render={() => <OrdersContainer/>}/>
                  <Route exact path="/order_history" render={() => <OrderHistoryContainer/>}/>
                  <Route exact path="/settings" render={() => <SettingsContainer/>}/>
                </Switch>
              </div>  
    );
  }
}

const msp = (state) => {
  return {
         farmers: state.farmers,
         currentUser: state.currentUser,
         itemOrders: state.itemOrders
    }
 }
 
const mdp = (dispatch) => {
 return {
     fetchFarmers: () => dispatch(getFarmers()),
     fetchCurrentUser: () => dispatch(getCurrentUser()),
     fetchItemOrders: () => dispatch(getItemOrders()),
     fetchItems: () => dispatch(getItems())
    }
 }

export default connect(msp, mdp)(withRouter(App)); 