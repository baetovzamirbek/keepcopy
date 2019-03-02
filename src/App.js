import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import "./App.sass";

import Header from "./components/partials/Header/Header";
import Main from "./components/partials/Main";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
