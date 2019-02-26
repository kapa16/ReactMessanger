import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../Layout/Layout";
import './App.sass'
import {bindActionCreators} from "redux";
import {changeChatId} from "../../redux/actionsCreator/messageActionsCreator";
import {connect} from "react-redux";

export default class App extends Component {



  // createMessageHandler = (e) => {
  //   e.preventDefault();
  //   if (!this.state.currentMessage) {
  //     return;
  //   }
  //   this.setState(({chats, currentMessage}) =>
  //     this.getNewState(chats, currentMessage, 'mySelf', this.currentChatId));
  //   this.addRobotMsg(this.currentChatId);
  // };
  //
  // showRobotMsg = (currentChatId) => {
  //   this.setState(({chats, robotMessage}) =>
  //     this.getNewState(chats, robotMessage, 'robot', currentChatId));
  // };
  //
  // addRobotMsg = (currentChatId) => {
  //   setTimeout(this.showRobotMsg, 2000, currentChatId);
  // };

  render() {

    const {changeChatId} = this.props;

    return (
      <Grid container className="app">
        <CssBaseline/>
        <Switch>
          <Route exact path="/" component={Layout}/>
          <Route path="/chat/:id" render={(obj) => {
            const currentChatId = +obj.match.params.id;
            return <Layout id={currentChatId}/>
          }
          }/>
        </Switch>

      </Grid>
    )
  }

};

// const mapDispatchToProps = dispatch => bindActionCreators({changeChatId}, dispatch);
//
// export default connect(null, mapDispatchToProps)(App);