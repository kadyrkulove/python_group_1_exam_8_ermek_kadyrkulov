import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import TaskList from "./containers/TaskList/TaskList";
import TaskDetails from "./containers/TaskDetails/TaskDetails";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={TaskList}/>
                <Route path="/task/:id" component={TaskDetails}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
