import { Component } from "react";
import { connect } from "react-redux";
import { setSelectedPin } from "../../redux/actions/pinsActions";
class PinDisplay extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setSelectedPin(id);
  }

  render() {
    const { title, description, image, siteUrl } = this.props;
    return (
      <div>
        <a href={siteUrl}>{title}</a>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.pins.selectedPin,
});

export default connect(mapStateToProps, { setSelectedPin })(PinDisplay);
