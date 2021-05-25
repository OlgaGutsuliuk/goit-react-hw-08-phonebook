import React from "react";
import { useSelector } from "react-redux";
import { useLocation} from "react-router-dom";
import { getIsAuthSelector } from "../../../redux/auth/authSelector";
import mainRoutes from "../../../routes/mainRoutes";
import UserInfo from "../../userInfo/UserInfo";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  const isAuth = useSelector(getIsAuthSelector)
  const location= useLocation()
  return (
    <NavigationContainer>
      <nav className="nav">
       <ul className="list">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}
      </ul>
      {isAuth && <UserInfo />} 
      </nav>
    </NavigationContainer>
  );
};



export default Navigation;
