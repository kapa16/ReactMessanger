import React, {Component} from 'react';
import './App.sass'
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

export default class App extends Component {

  state = {
    currentMessage: '',
    robotMessage: 'This is robot answer',
    messages: []
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
    const {currentMessage, messages} = this.state;

    return (
      <div className="container">
        <Header/>
        <MessageList messages={messages}/>
        <MessageForm
          createMessageHandler={this.createMessageHandler}
          onChangeMessage={this.onChangeMessage}
          message={currentMessage}
        />
      </div>
    )
  }

};
