import { Component } from "react";
import { connect } from "react-redux";
import { setSelectedPin } from "../../redux/actions/pinsActions";
import styled from "styled-components";
class PinDisplay extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setSelectedPin(id);
  }

  render() {
    const { title, description, image, site_url, loading } = this.props;
    return (
      <>
        {!loading ? (
          <>
            <img src={image.url} alt={title} />
            <a href={site_url}>{title}</a>
            <p>{description}</p>
          </>
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

export default connect(mapStateToProps, { setSelectedPin })(PinDisplay);
