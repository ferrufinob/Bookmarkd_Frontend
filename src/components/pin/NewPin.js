import React, { Component } from "react";
import { connect } from "react-redux";
import { addPin } from "../../redux/actions/pinsActions";
import styled from "styled-components";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import IconButton from "@material-ui/core/IconButton";
import { getBoards } from "../../redux/actions/boardsActions";

class NewPin extends Component {
  state = {
    title: "",
    description: "",
    image: null,
    site_url: "",
    board: "",
  };

  componentDidMount() {
    this.props.getBoards();
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("site_url", this.state.site_url);
    formData.append("board", this.state.board);
    formData.append("image", this.state.image);
    this.props.addPin(formData, this.props.history);
  };

  onImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  render() {
    const boards = this.props.boards.map((board) => (
      <option key={board.id} value={board.name}>
        {board.name}
      </option>
    ));
    return (
      <FormWrapper>
        <form onSubmit={this.handleOnSubmit}>
          <Wrapper>
            <ImageWrapper>
              <input
                type="file"
                required
                accept="image/png, image/jpeg"
                multiple={false}
                onChange={this.onImageChange}
                id="icon-button-file"
                style={{ display: "none" }}
              />
              <label htmlFor="icon-button-file">
                <IconButton component="span">
                  <InsertPhotoIcon fontSize="large" />
                  <p>Click to upload</p>
                </IconButton>
              </label>
            </ImageWrapper>
            <InfoWrapper>
              <input
                required
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
                <option value=""> Select Board&hellip;</option>
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
              <textarea
                type="text"
                required
                name="description"
                placeholder="Tell everyone what your Pin is about"
                value={this.state.description}
                onChange={this.handleOnChange}
                className="description"
              ></textarea>
              {/* <input
                type="text"
                required
                name="description"
                placeholder="Tell everyone what your Pin is about"
                value={this.state.description}
                onChange={this.handleOnChange}
                className="description"
              /> */}
              <input
                type="text"
                required
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

const mapStateToProps = (state) => ({ boards: state.boards.boards });

const Wrapper = styled.div`
  display: flex;
`;

const FormWrapper = styled.div`
  position: fixed;
  border-radius: 5px;
  height: 650px;
  width: 880px;
  padding: 40px 40px 0px;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  background-color: #f9f9f9;
  z-index: 0;
  button {
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
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  }
  button:hover {
    background-color: #e98074;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  border: 3px #838d8a dashed;
  width: 440px;
  height: 600px;
  text-align: center;

  span {
    margin: 100px auto;
  }
`;
const InfoWrapper = styled.div`
  display: inline-block;
  width: 440px;
  height: 600px;
`;
export default connect(mapStateToProps, { addPin, getBoards })(NewPin);
