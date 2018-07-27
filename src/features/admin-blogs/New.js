import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class New extends Component {
  static propTypes = {
    adminBlogs: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="admin-blogs-new">
        Page Content: admin-blogs/New
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    adminBlogs: state.adminBlogs,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
