import { connect } from 'react-redux';
import City from './components2/control';

const mapStateToProps = state => {
  return {
    city: state.city,
  }
}

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps)(City);