import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authActions";
import { getEmailSelector, getIsAuthSelector } from "../../redux/auth/authSelector";
import { NavigationContainer } from "../header/navigation/NavigationStyled";

const UserInfo = () => {
  const email = useSelector(getEmailSelector);
  const isAuth = useSelector(getIsAuthSelector);
  const dispatch = useDispatch();
const logOutContacts =()=> dispatch(logOut())

  return (
    <>
      <NavigationContainer>
        <div className="userInfo">
        <p  className="userItem">{email}</p>
      {isAuth && ( 
        <button className="userBtn" type="button" onClick={logOutContacts}>
          LogOut
        </button>
      )}
      </div>
      </NavigationContainer> 
    </>
  );
};



export default  UserInfo;
