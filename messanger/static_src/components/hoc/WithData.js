import React, { Component } from "react";

const WithData = (View, loadData) => {
  return class extends Component {
    componentDidMount() {
      this.props[loadData]();
    }

    render() {
      return <View  {...this.props}/>;
    }
  }
};

export default (WithData);