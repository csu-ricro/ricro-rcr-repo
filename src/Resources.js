import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Resource from './Resource';

class Resources extends Component {
  mapResources = resources => {
    let mappedElements = [];
    let i = 0;
    while (i < resources.length) {
      if (i % 2 === 0) {
        mappedElements.push(...[(
          <div key={i} className='row'>
              <div className='col-lg-6'>
                <Resource resource={resources[i]}/>
              </div>
              <div className='col-lg-6'>
                <Resource resource={resources[++i]}/>
              </div>
            </div>
        )]);
      } else {
        mappedElements.push(...[(
          <div key={i} className='row'>
              <div className='col-lg-6'>
                <Resource resource={resources[i]}/>
              </div>
          </div>
        )]);
      }
      i++;
    }
    return mappedElements;
  }

  render() {
    let {
      resources
    } = this.props;
    return this.mapResources(resources);
  }
}

Resources.proptypes = {
  classes: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
};

export default Resources;
