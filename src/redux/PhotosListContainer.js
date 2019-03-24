import connect from "react-redux";
import PhotosList from "../components/PhotoList";
import { fetchPhotos } from "../redux/Photos";

const mapStateToProps = state => ({ photos: state.photos });

const mapDispatchToProps = () => ({ fetchPhotos });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosList);
