import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeckPage from "./Components/DeckPage";
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import Deck from "./Components/Deck";
import CardPageTwo from "./Components/CardPageTwo";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route path="/DeckPage" component={DeckPage} />
                    <Route path="/Deck" component={Deck} />
                    <Route path="/Cards" component={Cards} />
                    <Route path="/Card" component={Card} />
                    <Route path="/" component={CardPageTwo} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
