import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import {Clients} from "./client/Clients"
import {UserSettings} from "./settings/User"

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/dashboard`} component={() => <span>dashboard</span>} />
        <Route path={`${APP_PREFIX_PATH}/clients/list`} component={Clients} />
        <Route path={`${APP_PREFIX_PATH}/settings/user/:id`} component={UserSettings} />
        {/*<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />*/}
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
