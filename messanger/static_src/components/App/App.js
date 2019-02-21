import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../Layout/Layout";
import './App.sass'

const chats = [
  {
    id: 1,
    title: "First chat",
    messages: []
  },
  {
    id: 2,
    title: "Second chat",
    messages: []
  },
  {
    id: 3,
    title: "Third chat",
    messages: []
  },
  {
    id: 4,
    title: "Fourth chat",
    messages: []
  },
];

export default class App extends Component {

  state = {
    currentMessage: '',
    robotMessage: 'This is robot answer',
    messages: [],
    chats
  };

  currentId = 0;

  onChangeMessage = (e) => {
    this.setState({
      currentMessage: e.target.value
    });
  };

  createMessage = (text, sender) => {
    const created = new Date();
    return {
      id: this.currentId++,
      text,
      sender,
      createdDate: created.toLocaleDateString(),
      createdTime: created.toLocaleTimeString()
    }
  };

  getMessages = (messages, currentMessage, sender) => {
    return {
      currentMessage: '',
      messages: [
        ...messages,
        this.createMessage(currentMessage, sender)
      ]
    };
  };

  createMessageHandler = (e) => {
    e.preventDefault();
    if (!this.state.currentMessage) {
      return;
    }
    this.setState(({messages, currentMessage}) => this.getMessages(messages, currentMessage, 'mySelf'));
    this.addRobotMsg();
  };

  showRobotMsg = () => {
    this.setState(({messages, robotMessage}) => this.getMessages(messages, robotMessage, 'robot'));
  };

  addRobotMsg = () => {
    setTimeout(this.showRobotMsg, 2000);
  };

  render() {

    const propsLayout = {
      ...this.state,
      createMessageHandler: this.createMessageHandler,
      onChangeMessage: this.onChangeMessage
    };

    return (
      <Grid container className="app">
        <CssBaseline/>
        <Switch>
          <Route exact path="/" render={() => <Layout {...propsLayout}/>}/>
          <Route exact path="/chat/:id" render={(obj) => <Layout {...propsLayout} id={+obj.match.params.id}/>}/>
        </Switch>

      </Grid>
    )
  }

};
