import React from 'react';
import Landing from './Landing';

function action() {
  return {
    title: 'EverString',
    chunks: ['landing'],
    component: <Landing />,
  };
}

export default action;
