import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';


export default function ContactList ({contacts, onDeleteContact}) {
    return (
        <ol className={css.ContactList}>
            {contacts.map(({id, name, number}) => {
                return (
                    <li className={css.ContactList_item} key={id}>
                        <p>
                        {name}: {number}
                        </p>
                        <button className={css.ContactList_btn}
                        onClick={() => onDeleteContact(id)} 
                        type="button">
                        Delete 
                        </button>
                    </li>
                )
            })}
        </ol>
    )
}

ContactList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    number: PropTypes.number,
    onRemoveContact: PropTypes.func,
  };