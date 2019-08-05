import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './molecules/Header';
import Footer from './molecules/Footer';
import Main from './organisms/Main';

import GlobalStyles from './atoms/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/styling';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (

      // Wrap our whole app in the Provider component that comes with react-redux,
      // and pass it our store as a prop.
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles/>
            <Router>
              <div className="AppContainer">
                <Header/>
                <Main/>
                <Footer/>
              </div>
            </Router>
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
