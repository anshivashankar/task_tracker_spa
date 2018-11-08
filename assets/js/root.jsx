
// root.jsx inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/root.jsx
// and http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';
import api from './api';
import TaskList from './task_list';
import TaskAdd from './task_add';
import UserAdd from './user_add';
import Header from './header';
import store from './store';


export default function root_init(node, store) {
  let action = {
    type: 'PRODUCT_LIST',
    data: window.products,
  };
  store.dispatch(action);
  api.fetch_tasks();
  api.fetch_users();
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>, node);
}

function Root(props) {
  return <div>
    <Router>
      <div>
        <Header />
        <Route path="/" exact={true} render={() =>
          <TaskList />
        } />
        <Route path="/new-task" exact={true} render={() =>
          <TaskAdd />
        } />
        <Route path="/register" exact={true} render={() =>
          <UserAdd />
        } />
      </div>
    </Router>
  </div>;
}
