import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getIsAuthSelector } from "../../redux/auth/authSelector";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Main = () => {
  const isAuth = useSelector(getIsAuthSelector)
  return (
    <>
      <Suspense fallback={<h2>LOADING....</h2>}>
        <Switch>
          {mainRoutes.map(item =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
