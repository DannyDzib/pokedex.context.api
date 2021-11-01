import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '@navigation/routes';
import { Provider } from 'react-redux'
import Store from './redux/Store';
import NavBar from './components/NavBar/index';

const App: React.FC<{}> = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  {...props}
                  {...route.props}
                />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
