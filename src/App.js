import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar.js'

// Containers //
import HomeContainer from './containers/HomeContainer.js'
import ExplorerContainer from './containers/ExploreContainer.js'
import OrdersContainer from './containers/OrdersContainer.js'
import MessagesContainer from './containers/MessagesContainer.js'
import SettingsContainer from './containers/SettingsContainer.js'
import VendorsContainer from './containers/VendorsContainer.js'
import VendorShowContainer from './containers/VendorShowContainer.js'

class App extends React.Component {
  
  render() {
      return (
              <div>    
                <NavBar/>
                <Switch>
                {/* <Route exact path="/" render={}/> */}
                <Route exact path="/home" render={() => <HomeContainer/>}/>
                  <Route exact path="/explore" render={() => <ExplorerContainer/>}/>
                  <Route exact path="/markets/:id" render={() => <VendorsContainer/>}/>
                  <Route exact path="/farmers/:id" render={() => <VendorShowContainer/>}/>
                  <Route exact path="/orders" render={() => <OrdersContainer/>}/>
                  <Route exact path="/messages" render={() => <MessagesContainer/>}/>
                  <Route exact path="/settings" render={() => <SettingsContainer/>}/>
                </Switch>
              </div>  
    );
  }
}

export default withRouter(App);
