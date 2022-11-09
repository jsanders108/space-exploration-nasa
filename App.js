import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import Mars from "./components/Mars"
import Footer from "./components/Footer"

export default function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/mars"><Mars /></Route>
            </Switch>
            <Footer />
        </div>
    )
}
