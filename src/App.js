import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cursos from "./pages/Cursos/Cursos";
import Curso from "./pages/Curso/Curso";

//context
import Provider from "./context/CursosContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counterCart: 0,
    };
  }

  addToCart = () => {
    const { counterCart } = this.state;
    this.setState({
      counterCart: counterCart + 1,
    });
  };

  render() {
    const { counterCart } = this.state;
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header counterCart={counterCart} />
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/cursos">
                  <Cursos addToCart={this.addToCart} />
                </Route>
                <Route exact path="/cursos/:idCurso">
                  <Curso />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
