import React from "react";
import style from "../contactsList/ContactsList.module.css";
import { useDispatch, useSelector} from "react-redux";
import { deleteContactsOperation } from "../../../redux/tellContactsOperations";
import { getFilterContacts } from "../../../redux/tellContactsSelectors";

export default function ContactsList() {
  const telNumbers = useSelector(getFilterContacts)
   const dispatch = useDispatch()
const deleteContacts = (e) => {
   dispatch(deleteContactsOperation(e.target.id))
    
  }
  return (
    <ul className={style.list}>
        { telNumbers.map(telNumber =>
        (<li className={style.list_item} key={telNumber.id}>
            <p>{telNumber.name}: </p>
            <p>{telNumber.number}</p>
             <button className={style.list_button} type="button" onClick={deleteContacts} id={telNumber.id}>Delete</button>
            </li>
    ))}
    </ul>
  )
}


