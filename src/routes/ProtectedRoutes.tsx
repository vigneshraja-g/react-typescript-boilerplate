import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './Routes' // Route list
import PageNotFound from 'pages/PageNotFound'

const ProtectedRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path} exact={exact}>
          <Component />
        </Route>
      ))}
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Suspense>
)

export default ProtectedRoutes
