import React from 'react';
import { connect } from 'react-redux';

import { getViewMode } from '../store';

const Root = ({ viewMode }) => {
  return <p>Root is online!</p>;
};

export default connect(state => ({ viewMode: getViewMode(state) }))(Root);
