import React, { Component } from 'react'
import { HashRouter, Route } from "react-router-dom";
import StarWarIndex from './star-war-index'
import CommentIndex from "./comment-index";
import Header from './header'

class App extends Component {
  render() {
    return (
      <HashRouter className="App">
        <Header className="App-header" />
        <div style={{ display: "flex", justifyContent: "center", minWidth: '500px' }}>
          <Route path="/" exact component={StarWarIndex} />
          <Route path="/comment" exact component={CommentIndex} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
