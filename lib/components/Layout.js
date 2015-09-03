import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class extends React.Component {
  render() {
    return <div className="page">
      <Header/>
      <Body>
      {this.props.children}
      </Body>
      <Footer/>
      <script src='index.js'></script>
    </div>;
  }
}