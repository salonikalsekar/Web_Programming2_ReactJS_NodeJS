import React from "react";
import {Route, Switch} from "react-router-dom";

import machineList_Container from "./machineContainer";

export const Machines = (match) => {
    return (
        <div>
            <Switch>

                <Route exact path="/machines/page/:id" component={machineList_Container}/>
            </Switch>
        </div>
    );
};