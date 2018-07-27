import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});


export class LangSelector extends Component {
 

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event, lang) => {
    console.log(lang);
    
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.props.actions.switchLang(lang);

    this.setState({ open: false });
  };

  render() {

    const { classes } = this.props;
    const { open } = this.state;
    const { lang } = this.props.adminSources;

    return (
      <div className="admin-sources-lang-selector">
        <div className={classes.root}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            {lang? lang["select language"] : "..."}
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={e => this.handleClose(e, lang["lang1_val"])}>{lang && lang["lang1"]}</MenuItem>
                      <MenuItem onClick={e => this.handleClose(e, lang["lang2_val"])}>{lang && lang["lang2"]}</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
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


LangSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  adminSources: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(LangSelector));
