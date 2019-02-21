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
    chats
  };

  currentMessageId = 0;
  currentChatId = 0;

  onChangeMessage = (e) => {
    this.setState({
      currentMessage: e.target.value
    });
  };

  createMessage = (text, sender) => {
    const created = new Date();
    return {
      id: this.currentMessageId++,
      text,
      sender,
      createdDate: created.toLocaleDateString(),
      createdTime: created.toLocaleTimeString()
    }
  };

  getNewState = (chats, currentMessage, sender, currentChatId) => {
    const currentChat = chats.find((chat) => chat.id === currentChatId);
    if (!currentChat) {
      return this.state;
    }

    currentChat.messages.push(this.createMessage(currentMessage, sender));

    const index = chats.indexOf(currentChat);
    return {
      chats: [
        ...chats.slice(0, index),
        Object.assign({}, currentChat),
        ...chats.slice(index + 1)
      ],
      currentMessage: ''
    }
  };

  createMessageHandler = (e) => {
    e.preventDefault();
    if (!this.state.currentMessage) {
      return;
    }
    this.setState(({chats, currentMessage}) =>
      this.getNewState(chats, currentMessage, 'mySelf', this.currentChatId));
    this.addRobotMsg(this.currentChatId);
  };

  showRobotMsg = (currentChatId) => {
    this.setState(({chats, robotMessage}) =>
      this.getNewState(chats, robotMessage, 'robot', currentChatId));
  };

  addRobotMsg = (currentChatId) => {
    setTimeout(this.showRobotMsg, 2000, currentChatId);
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
          <Route path="/chat/:id" render={(obj) => {
            this.currentChatId = +obj.match.params.id;
            return <Layout {...propsLayout} id={this.currentChatId}/>
          }
          }/>
        </Switch>

      </Grid>
    )
  }

};
