import React from 'react';

export default class extends React.Component {
  render() {
    return <article className="page__body page-body">{this.props.children}</article>;
  }
}