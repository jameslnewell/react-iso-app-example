import React from 'react';

export default class SearchForm extends React.Component {

  constructor() {
    super();

    this.state = {
      query:    '',
      results:  []
    };

  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
      <input type="search" className="search-form__input" value={this.state.query} placeholder="Where do you want to find a charity bin near?" autoFocus onChange={this.handleChange.bind(this)}/>
      <button className="search-form__submit">Search</button>
    </form>;
  }

}

SearchForm.propTypes = {
  onSubmit: React.PropTypes.func
};


