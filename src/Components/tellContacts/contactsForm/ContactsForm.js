import React from "react";
import style from "../contactsForm/TelContacts.module.css";

import { resetError } from "../../../redux/tellContactsAction";
import { errorContactsSelector, getContactsSelector } from "../../../redux/tellContactsSelectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactsOperation } from "../../../redux/tellContactsOperations";

const initialState = {
  contacts: [],
  name: "",
  filter: "",
  number: ""
};

export default function ContactsForm() {
  const [state, setState] = useState(initialState);
  const error = useSelector(errorContactsSelector)
  const contacts = useSelector(getContactsSelector)
  const dispatch = useDispatch();

    const checkDublicateName = name => {
    return contacts.some(contact => contact.name === name);
  };


  const onHandleSubmit = e => {
    e.preventDefault();
    if (checkDublicateName(state.name)) {
      alert(`${state.name} already exist`);
      return;
    }
    dispatch(addContactsOperation(state));
    setState(initialState);
  };

  const onHandleChange = e => {
    error && dispatch(resetError());
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className={style.contact_form} onSubmit={onHandleSubmit}>
      <label className={style.form_label}>
        Name:{" "}
        <input
          className={style.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={state.name}
        />
      </label>
      <label className={style.form_label}>
        Number:
        <input
          className={style.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={state.number}
        />
      </label>
      <button className={style.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

