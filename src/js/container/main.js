import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import Actions from '../actions';


const Main = props => (
  <div>
test!
  </div>
);

Main.propTypes = {

};

const mapStateToProps = state => (
  {

  }
);

const mapDispatchToProps = dispatch => (
  {

  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
