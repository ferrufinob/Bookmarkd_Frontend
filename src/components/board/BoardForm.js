import React, { Component } from "react";
import { connect } from "react-redux";
import { addBoard } from "../../redux/actions/boardsActions";
import styled from "styled-components";

class BoardForm extends Component {
  state = {
    name: "",
  };
  handleOnChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBoard(this.state, this.props.history);
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <FormWrapper>
          <label htmlFor="name">Create Board</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="submit">Save</button>
        </FormWrapper>
      </form>
    );
  }
}

const FormWrapper = styled.div`
  text-align: center;
  position: fixed;
  border-radius: 5px;
  height: 300px;
  width: 400px;
  padding: 40px 40px 0px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  background-color: #f9f9f9;
  z-index: 0;
  button {
    background-color: #e85a4f;
    border-radius: 10px;
    height: 48px;
    width: 100px;
    border: none;
    color: white;
    margin: 10px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  }
  button:hover {
    background-color: #e98074;
  }
  input {
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    border: 2px solid #dddddd;
    border-radius: 20px;
  }
  label {
    font-weight: 700;
    font-size: 20px;
  }
`;

export default connect(null, { addBoard })(BoardForm);
