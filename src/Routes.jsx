import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroesGrid from "./Components/HeroesGrid";
import SingleHero from "./Components/SingleHero";
import Home from "./Components/Home";

export default function Routes() {
    return (
    <div className="container h-screen w-screen bg-pink-300">
        <Router>
            <Header/>
            <Switch>
                <Route path="/heroes">
                    <HeroesGrid/>
                </Route>
                <Route path="/hero">
                    <SingleHero/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    </div>
    )
}
