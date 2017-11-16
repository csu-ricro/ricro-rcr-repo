import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Resources from './Resources';

const styles = theme => ({
  wrapper: {
    marginTop: 10,
  },
  divider: {
    margin: '5px 0 10px 0',
  },
});

class Section extends Component {
  render() {
    let {
      classes,
      section,
    } = this.props;
    return (
      <div className={'container ' + classes.wrapper}>
        <Typography type='display2'>{section.name}</Typography>
        <hr className={classes.divider}/>
        <Resources resources={section.resources}/>
      </div>
    );
  }
}

Section.proptypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
