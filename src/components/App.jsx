import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'store/auth/selectors';
import { refreshUser } from 'store/auth/operations';
import Loader from './Loader/Loader';
import HomePage from './HomePage/HomePage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout/Layout';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ChakraProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute redirectTo="/contacts" component={HomePage} />
              }
            />
            <Route
              path="contacts"
              element={<PrivateRoute redirectTo="/" component={Contacts} />}
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={Login} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={Register} />
              }
            />
            <Route path="*" element={<div>not....</div>} />
          </Route>
        </Routes>
      </>
    </ChakraProvider>
  );
};
export default App;
