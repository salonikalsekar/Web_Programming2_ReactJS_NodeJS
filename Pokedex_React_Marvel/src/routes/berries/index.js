import React from "react";
import {Route, Switch} from "react-router-dom";

import berryContainer from "./berryContainer";

export const Berries = (match) => {
    return (
        <div>
            <Switch>
                <Route exact path="/berry/page/:id" component={berryContainer}/>
            </Switch>
        </div>
    );
};