import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes; */



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import App from './App';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/inventario" component={App} />
            </Switch>
        </Router>
    );
};

export default AppRouter;