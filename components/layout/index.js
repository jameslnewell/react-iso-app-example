import React from 'react';

import Header from './header';
import Footer from './footer';

export default class extends React.Component {
  render() {
    return <div className="layout">
      <Header/>
      <article className="layout__body layout-body">
        {this.props.children}
      </article>
      <Footer/>
      <script src='index.js'></script>
    </div>;
  }
}