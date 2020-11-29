import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroesGrid from "./Components/HeroesGrid";
import SingleHero from "./Components/SingleHero";
import Home from "./Components/Home";

const API_KEY = "bb3b717d390348274a7107ab959e2de0"
const API_URL = "https://gateway.marvel.com:443/v1/public/characters?apikey=bb3b717d390348274a7107ab959e2de0"



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
