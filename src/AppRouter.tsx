import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import Footer from 'components/common/Footer';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/checkout/" component={Checkout} />
          <Route path="/login" component={Login} />
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
