import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/serviceDetail/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceName">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
