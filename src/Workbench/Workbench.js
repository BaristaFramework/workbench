import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Workbench extends PureComponent {
  render() {
    const { className, children } = this.props;
    const classes = `bfw Workbench${className ? ' ' + className : ''}`;

    return <div className={classes}>{children}</div>;
  }
}

Workbench.propTypes = {
  className: PropTypes.string
};

export default Workbench;
