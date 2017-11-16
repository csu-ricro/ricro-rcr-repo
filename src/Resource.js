import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  withStyles,
} from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

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
          <List disablePadding>
            {_.isEmpty(resource.links) ? null : (
              <div>
                {resource.links.map((link, i) =>
                  <a key={i} href={link.href} className={classes.noHover}>
                    <ListItem button>
                      <Avatar className={this.props.classes.linkIcon}>
                        <i className={'fa ' + this.icon(link.href)} aria-label='Link Type'/>
                      </Avatar>
                      <ListItemText
                        primary={<span className={classes.breakWord}>{link.display}</span>}
                        secondary={link.display === link.href ? null : <span className={classes.breakWord}>{link.href}</span>}
                        />
                    </ListItem>
                  </a>
                )}
              </div>
            )}
          </List>
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
