import React, {Component} from 'react';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import css from './Form.module.css';


 class Form extends Component {
    state = {
        name: '',
        number: ''
      };
    
    handleChange = e => {
    const {name, value} = e.currentTarget
        this.setState({
        [name]: value
        })
    }

    handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    nameId = nanoid();
    telId = nanoid();

    render () {
      const {name, number} = this.state
        return (
            <form onSubmit={this.handleSubmit} className={css.formSection}>
        <label htmlFor={this.nameId}>
            Name <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            className={css.input}
          />
        </label>
        <label htmlFor={this.telId}>
            Number <input
            type="tel"
            name='number'
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.telId}
            className={css.input}
          />  
        </label>
        <button type="submit" disabled={name === '' || number === ''}>Add contact</button>
      </form>
        )
    }
 }

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
export default Form