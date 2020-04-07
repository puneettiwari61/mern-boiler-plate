import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    axios
      .post("api/login", { ...this.state })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <h1>LOGIN Form</h1>
        <input
          type="text"
          name="email"
          onChange={this.handlechange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          onChange={this.handlechange}
          value={this.state.password}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
