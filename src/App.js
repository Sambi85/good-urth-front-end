import React from 'react';

import NavBar from './components/NavBar.js'
import HomeContainer from './containers/HomeContainer.js'
import marketContainer from './containers/marketContainer.js'
import orderContainer from './containers/orderContainer.js'
import messageContainer from './containers/messageContainer.js'
import settingsContainer from './containers/settingsContainer.js'
import Header from './components/header.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div>
    
      <NavBar/>
      <HomeContainer/>
    </div>
  );
}

export default App;
