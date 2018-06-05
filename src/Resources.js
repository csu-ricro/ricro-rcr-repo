import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Resource from './Resource';

class Resources extends Component {
  mapResources = resources => {
    const mappedElements = [];
    let i = 0;
    while (i < resources.length) {
      if (i % 2 === 0) {
        mappedElements.push(
          ...[
            <div key={i} className="row">
              <div className="col-lg-6">
                <Resource resource={resources[i]} />
              </div>
              <div className="col-lg-6">
                <Resource resource={resources[i + 1]} />
              </div>
            </div>,
          ],
        );
        i += 1;
      } else {
        mappedElements.push(
          ...[
            <div key={i} className="row">
              <div className="col-lg-6">
                <Resource resource={resources[i]} />
              </div>
            </div>,
          ],
        );
      }
      i += 1;
    }
    return mappedElements;
  };

  render() {
    const { resources } = this.props;
    return this.mapResources(resources);
  }
}

Resources.propTypes = {
  classes: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
};

export default Resources;
