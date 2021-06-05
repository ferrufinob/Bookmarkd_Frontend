import React, { Component } from "react";
import { connect } from "react-redux";
import { addPin } from "../../redux/actions/pinsActions";
import styled from "styled-components";

class NewPin extends Component {
  state = {
    title: "",
    description: "",
    image: " ",
    site_url: "",
    board: "",
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addPin(this.state);
    this.setState({
      title: "",
      description: "",
      image: " ",
      site_url: "",
      board: "",
    });
  };

  render() {
    const boards = this.props.boards.map((board) => (
      <option key={board.id} value={board.name}>
        {board.name}
      </option>
    ));
    console.log(this.state.board);
    return (
      <FormWrapper>
        <form onSubmit={this.handleOnSubmit}>
          <Wrapper>
            <ImageWrapper>
              <label>Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleOnChange}
              />
            </ImageWrapper>
            <InfoWrapper>
              <input
                type="text"
                name="board"
                placeholder="Create Board"
                value={this.state.board}
                onChange={this.handleOnChange}
                className="create-board"
              />
              <select
                name="board"
                value={this.state.board}
                onChange={this.handleOnChange}
              >
                {boards}
              </select>
              <input
                type="text"
                name="title"
                placeholder="Add your title"
                value={this.state.title}
                onChange={this.handleOnChange}
                className="title"
              />
              <input
                type="text"
                name="description"
                placeholder="Tell everyone what your Pin is about"
                value={this.state.description}
                onChange={this.handleOnChange}
                className="description"
              />
              <input
                type="text"
                name="site_url"
                placeholder="Add a destination link"
                value={this.state.site_url}
                onChange={this.handleOnChange}
                className="site_url"
              />
              <button type="submit">Save</button>
            </InfoWrapper>
          </Wrapper>
        </form>
      </FormWrapper>
    );
  }
}
const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  position: fixed;
  border-radius: 5px;
  height: 650px;
  width: 880px;
  // margin: 0 auto;
  padding: 40px 40px 0px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  background-color: #f9f9f9;
  button{
    background-color: #e85a4f;
    float: right;
    border-radius: 10px;
    margin: 100px 20px;
    height: 48px;
    width: 100px;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);3
  }
  button:hover{
 background-color: #e98074;
  }
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  border: 2px #838d8a dashed;
  width: 440px;
  height: 600px;
`;
const InfoWrapper = styled.div`
  display: inline-block;
  // border: 1px blue solid;
  width: 440px;
  height: 600px; 
  }
`;
export default connect(null, { addPin })(NewPin);
