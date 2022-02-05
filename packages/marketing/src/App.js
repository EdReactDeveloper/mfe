import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {StylesProvider} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
    return (
        <StylesProvider>
            <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/pricing" component={Pricing} exact />
            </BrowserRouter>   
        </StylesProvider>
    )
}

export default App;