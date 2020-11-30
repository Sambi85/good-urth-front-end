import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme.js'

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
        <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
    </div>
      <NavBar/>
      <HomeContainer/>
  </ThemeProvider>
    </div>
  );
}

export default App;
