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

  createMessageHandler = (e) => {
    e.preventDefault();
    this.setState(({ messages, currentMessage, robotMessage }) => {
      const newArr = [
        ...messages,
        this.createMessage(currentMessage, 'mySelf'),
        setTimeout(this.createMessage(robotMessage, 'robot'), 3000)
      ];
      return {
        currentMessage: '',
        messages: newArr
      }})
  };

  render() {
    const { currentMessage, messages } = this.state;

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
