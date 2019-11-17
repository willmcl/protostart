import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './molecules/Header';
import Footer from './molecules/Footer';

import GlobalStyles from './atoms/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/styling';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './utils/configureStore';
import Content from './templates/Content';

class App extends Component {

  render() {
    return (

      // Wrap our whole app in the Provider component that comes with react-redux,
      // and pass it our store as a prop.
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles/>
            <Router>
              <div className="AppContainer">
                <Header/>
                <Content/>
                <Footer/>
              </div>
            </Router>
          </div>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
