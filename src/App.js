import React, { Component } from "react";
import "./App.css";
import Row from "./components/Row";
import PhotoListContextConsumer from "./Consumers/ContextConsumer";
import PhotoListContextType from "./Consumers/contextType";
import PhotoListUseContext from "./Consumers/useContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Context demo</h1>

          <Row>
            <div>
              <h3>Context Consumer</h3>
              <PhotoListContextConsumer />
            </div>
            <div>
              <h3>ContextType</h3>
              <PhotoListContextType />
            </div>
            <div>
              <h3>useContext</h3>
              <PhotoListUseContext />
            </div>
          </Row>
        </header>
      </div>
    );
  }
}

export default App;
