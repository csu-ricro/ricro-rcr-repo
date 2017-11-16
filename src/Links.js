import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const styles = theme => ({
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

class Link extends Component {
  icon = hrefString => {
    if (hrefString == null) {
      return 'fa-circle-o';
    }
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
      links
    } = this.props;
    return (
      <List>
        {links.map((link, i) =>
          <a key={i} href={link.href} className={classes.noHover}>
            <ListItem button={link.href != null}>
              <Avatar className={this.props.classes.linkIcon}>
                <i className={'fa ' + this.icon(link.href)} aria-label='Link Type'/>
              </Avatar>
            <ListItemText
              primary={<span className={classes.breakWord}>{link.display}</span>}
              secondary={link.display === link.href ? null : <span className={classes.breakWord}>{link.href}</span>}
              />
          </ListItem>
          {i !== links.length-1 ? <Divider inset/> : null}
        </a>
      )}
    </List>
    );
  }
}

Link.proptypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
};

export default withStyles(styles)(Link);
