import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminWasteland from './component/admin_front/AdminWasteland';
import Home from './component/user_front/Home';
import Navbar from './component/user_front/Navbar';
import Footer from './component/user_front/Footer';
import RehabTotal from './component/user_front/RehabTotal';
import AdminHome from './containers/admin_front/AdminHome';
import SignIn from './component/admin_front/SignIn';
import PrivateRoute from './component/admin_front/PrivateRoute';
import AdminRehabForm from './component/admin_front/AdminRehabForm';
import ScrollToTop from './component/user_front/ScrollToTop';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute path="/adminwasteland/:id" component={AdminWasteland} />
        <Route exact path="/" component={Home} />
        <Route path="/milieuxrestaures" component={RehabTotal} />
        <Route path="/connection" component={SignIn} />
        <PrivateRoute exact path="/adminhome" component={AdminHome} />
        <PrivateRoute path="/adminrehabform/:id" component={AdminRehabForm} />
      </Switch>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
