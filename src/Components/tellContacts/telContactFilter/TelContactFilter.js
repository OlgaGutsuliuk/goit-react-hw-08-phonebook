import React from 'react';
import style from '../contactsForm/TelContacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsSelector } from '../../../redux/tellContactsSelectors'
import {filterContacts} from '../../../redux/tellContactsAction'

const TelContactFilter = () => {
    const filter = useSelector(filterContactsSelector)
    const dispatch = useDispatch();
    const setFilterValue=(e)=> dispatch(filterContacts(e.target.value))
    return (
        <label className={style.form_label}> 
        Find contacts by name
        <input className={style.form_input} type="text" value={filter} onChange={setFilterValue}/>
       </label>
    );
}

export default TelContactFilter;

