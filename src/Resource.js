import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withStyles,
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import Links from './Links';

const styles = theme => ({
  card: {
    padding: '10px 0',
  },
  paper: {
    padding: 16,
    overflowX: 'auto',
  },
  noHover: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  linkIcon: {
    background: theme.palette.primary["500"]
  },
  breakWord: {
    wordBreak: 'break-word',
  },
});

class Resources extends Component {
  icon = hrefString => {
    if (hrefString.match(/xl\w{1,2}$/gi)) {
      return 'fa-file-excel-o';
    }
    if (hrefString.match(/pdf$/gi)) {
      return 'fa-file-pdf-o';
    }
    if (hrefString.match(/do\w{1,2}$/gi)) {
      return 'fa-file-word-o';
    }
    if (hrefString.match(/png|jpg|jpeg|gif$/gi)) {
      return 'fa-file-image-o';
    }
    if (hrefString.match(/^.*www\.youtube\.com.*$/gi)) {
      return 'fa-youtube-play';
    }
    return 'fa-link';
  }
  render() {
    let {
      classes,
      resource
    } = this.props;
    return (
      <div className={classes.card}>
        <Paper className={classes.paper}>
          <Typography type='title'>{resource.name}</Typography>
          <Divider/>
          {_.isEmpty(resource.links) ? null : <Links links={resource.links}/>}
        </Paper>
      </div>
    );
  }
}

Resources.proptypes = {
  classes: PropTypes.object.isRequired,
  resource: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resources);
