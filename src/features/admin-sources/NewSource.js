import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import SourceForm from './SourceForm';

export class NewSource extends Component {
  static propTypes = {
    adminSources: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };


  render() {
    const { lang } = this.props.adminSources;
     const formParams = {
       title: lang["new source"],
       items: [
        {
          label: ""
        }
       ]
     }

    return (
      <div className="admin-sources-new-source">
        <SourceForm />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    adminSources: state.adminSources,
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
)(NewSource);
