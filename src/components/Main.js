import React from 'react';
import {Route, Switch} from 'react-router-dom';

const defaultView = () => (
    <div className="text-center">
        <h2> Response from Default View</h2>
        <h4>Example on using create-react-app with a Node Express Backend and setting up Bootstrap 4 </h4>
    </div>
);

const anotherView = () => (
    <div className="text-center">
        <h2> Response from Another View</h2>
    </div>
);

const Main = () => <div>
    <div style={{paddingTop: "100px"}}>
    <Switch>
        <Route path="/about" component={anotherView}/>
        <Route path="/" component={defaultView}/>
    </Switch>
    </div>
</div>;

export default Main;
