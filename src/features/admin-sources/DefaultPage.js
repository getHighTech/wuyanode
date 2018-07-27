import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Typography from '@material-ui/core/Typography';
import LangSelector from './LangSelector';

export class DefaultPage extends Component {
  static propTypes = {
    adminSources: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount(){
    console.log(this.props);
    
    this.props.actions.switchLang("zh")
  }

  render() {
    const { lang } = this.props.adminSources;
    return (
      <div className="admin-sources-default-page">
        <Typography variant="display1" gutterBottom>
          {lang && lang["Welcome Source Admin"]}
        </Typography>
        <LangSelector />
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
)(DefaultPage);
