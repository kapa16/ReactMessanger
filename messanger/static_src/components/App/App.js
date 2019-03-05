import React from 'react';
import { Route, Switch } from "react-router";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../Layout/Layout";
import './App.sass'

const App = () => {
  return (
    <Grid container className="app">
      <CssBaseline/>
      <Switch>
        <Route path="/chat/:id" component={Layout}/>
        <Route path="/profile" render={() => <Layout profile/>}/>
        <Route path="/" component={Layout}/>
      </Switch>
    </Grid>
  )
};

export default App;