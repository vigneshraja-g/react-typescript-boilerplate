import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes' //Authenticated routes
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const LoginPage = lazy(() => import('pages/Login'))
// const Register = lazy(() => import('pages/Register'))
// const ForgotPassword = lazy(() => import('pages/ForgotPassword'))
const PageNotFound = lazy(() => import('pages/PageNotFound'))

const RouterConfig = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
          <LoginPage />
        </PublicRoute>
        {/* <PublicRoute path="/register" isAuthenticated={isAuthenticated}>
            <Register />
          </PublicRoute>
          <PublicRoute
            path="/forgot-password"
            isAuthenticated={isAuthenticated}
          >
            <ForgotPassword />
          </PublicRoute> */}
        <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
          <ProtectedRoutes />
        </PrivateRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default RouterConfig
