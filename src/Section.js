import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Resources from './Resources';
import Links from './Links';

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
        <Typography type='body1'>{section.description}</Typography>
        {section.resources != null ? <Resources resources={section.resources}/> : <Links links={section.sources}/>}
      </div>
    );
  }
}

Section.proptypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
