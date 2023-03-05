import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';


class Searchbar extends Component {
  state = {
    query: '', 
  };

  handleChange = e => {
 
     this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
     if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset() {
    this.setState({ query: '' });
  }

  render() {
    return (
      <header >
        <form onSubmit={this.handleSubmit}>
          <button type="submit" >
            <span >
              <AiOutlineSearch width="25" height="25"/>              
            </span>
          </button>

          <input            
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"  
            size={40}
          />
        </form>
      </header>
    );
  }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default Searchbar;
