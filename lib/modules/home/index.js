import React from 'react';
import Page from '../../../components/pages/home';

export default function(page) {
  console.log(page.url);
  page.view = <Page/>;
};