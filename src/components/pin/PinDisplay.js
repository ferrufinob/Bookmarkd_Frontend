import { Component } from "react";
import { connect } from "react-redux";
import { setSelectedPin } from "../../redux/actions/pinsActions";
class PinDisplay extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setSelectedPin(id);
  }

  render() {
    const { title, description, image, site_url, loading } = this.props;
    console.log("pin display", this.props);

    return (
      <>
        {!loading ? (
          <div>
            <a href={site_url}>{title}</a>
            <img src={image} alt={title} />
            <p>{description}</p>
          </div>
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
