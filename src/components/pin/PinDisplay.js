import { Component } from "react";
import { connect } from "react-redux";
import { setSelectedPin } from "../../redux/actions/pinsActions";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class PinDisplay extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setSelectedPin(id);
  }

  render() {
    const { title, description, image, site_url, userName, loading } =
      this.props;
    return (
      <>
        {!loading ? (
          <Wrapper>
            <Child>
              <img src={image} alt={title} />
            </Child>
            <Child>
              <a href={site_url}>{site_url}</a>
              <PinInfo>
                <h1>{title}</h1>
                <p>{description}</p>
              </PinInfo>
              <Username>
                <AccountCircleIcon fontSize="small" />
                {userName}
              </Username>
            </Child>
          </Wrapper>
        ) : (
          <h1>LOADING:</h1>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  ...state.pins.selectedPin,
});

const Wrapper = styled.section`
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 4px rgba(34, 25, 25, 0.4);
  width: 100%;
  margin: 50px auto;
  border-radius: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
  a {
    color: #444;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Child = styled.section`
  flex-basis: 100%;
`;

const PinInfo = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-left: 10px;
  h1 {
    font-size: 30px;
  }
`;

const Username = styled.h5`
  text-align: center;
`;
export default connect(mapStateToProps, { setSelectedPin })(PinDisplay);
