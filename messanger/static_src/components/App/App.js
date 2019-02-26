import React from 'react';
import {Route, Switch} from "react-router";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../Layout/Layout";
import './App.sass'

const App = () => {
  return (
    <Grid container className="app">
      <CssBaseline/>
      <Switch>
        <Route exact path="/" component={Layout}/>
        <Route path="/chat/:id" render={(obj) => <Layout id={+obj.match.params.id}/>}/>
      </Switch>
    </Grid>
  )
};

export default App;