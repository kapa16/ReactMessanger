import React, {Component} from 'react';
import Header from "../Header/Header";
import MessageList from "../MessageList/MessageList";
import MessageForm from "../MessageForm/MessageForm";

export default class App extends Component {

  state = {
    messages: []
  };

  render() {
    return (
      <div>
        <Header/>
        <MessageList/>
        <MessageForm/>
      </div>
    )
  }

};
