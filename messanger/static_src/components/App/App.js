import React, {Component} from 'react';
import './App.sass'
import Layout from "../Layout/Layout";

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

    return (
      <div className="container">
        <Layout
          {...this.state}
          createMessageHandler={this.createMessageHandler}
          onChangeMessage={this.onChangeMessage}
        />
      </div>
    )
  }

};
