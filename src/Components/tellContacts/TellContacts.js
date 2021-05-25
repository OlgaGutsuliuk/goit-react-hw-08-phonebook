import React, { useEffect } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import TelContactFilter from "./telContactFilter/TelContactFilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllClientsOperation } from "../../redux/tellContactsOperations";
import { errorContactsSelector, loaderContactsSelector } from "../../redux/tellContactsSelectors";

export default function TellContacts() {
  const error = useSelector(errorContactsSelector);
  const isLoading = useSelector(loaderContactsSelector);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getAllClientsOperation());
    },
    [dispatch]
  );

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading....</h2>}
      <ContactsForm />
      <TelContactFilter />
      <ContactsList />
    </>
  );
}
