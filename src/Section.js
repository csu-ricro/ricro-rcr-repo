import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import sections from './assets/sections.json';
import Resources from './Resources';
import Links from './Links';

const styles = () => ({
  wrapper: {
    marginTop: 10,
  },
  divider: {
    margin: '5px 0 10px 0',
  },
});

const Section = props => {
  const { classes, section } = props;
  return (
    <div className={`container ${classes.wrapper}`}>
      <Typography type="display2">{section.name}</Typography>
      <hr className={classes.divider} />
      <Typography type="body1">{section.description}</Typography>
      {section.resources != null ? (
        <Resources resources={section.resources} />
      ) : (
        <Links links={section.sources} />
      )}
    </div>
  );
};

Section.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
};

class SectionsContainer extends Component {
  render() {
    const { classes } = this.props;
    return sections.map(section => (
      <Section key={section.name} classes={classes} section={section} />
    ));
  }
}

SectionsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionsContainer);
