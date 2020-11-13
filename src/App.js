
import './App.css';
import React from 'react';
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
      <HomeContainer/>
    </div>
  );
}

export default App;
