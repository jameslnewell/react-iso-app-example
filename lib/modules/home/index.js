import React from 'react';
import Page from './components/Page';

export default function(page) {
  console.log(page.url);
  page.view = <Page/>;
};