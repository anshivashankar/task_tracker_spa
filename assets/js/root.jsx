
// root.jsx inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/root.jsx
// and http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import _ from 'lodash';
import $ from 'jquery';
import api from './api';
import TaskList from './task_list';

//export default function root_init(node) {
//  let tasks = window.tasks;
//  ReactDOM.render(<Root tasks={tasks} />, node);
//}

export default function root_init(node, store) {
  let action = {
    type: 'PRODUCT_LIST',
    data: window.products,
  };
  store.dispatch(action);
  api.fetch_tasks();
  api.fetch_users();
  //api.fetch_cart();
  api.create_session("testing@email.com", "password2");
  ReactDOM.render(
    <Provider store={store}>
      <Root tasks={window.tasks}/>
    </Provider>, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      session: null
    };
    //api.create_session("testing@email.com", "password2");
  }
/*
  fetch_new_tasks() {
    $.ajax("/api/tasks", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        let state1 = _.assign({}, this.state, { tasks: resp.data });
        this.setState(state1);
      },
    });
  }


  //inspired by lecture notes on 11-02
  create_session(email, password) {
    $.ajax("/api/sessions", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({email, password}),
      success: (resp) => {
        let state1 = _.assign({}, this.state, { session: resp.data });
        this.setState(state1);
        //console.log(state1);
      }
    });
  }
*/
  render() {
    return <div>
      <Header session={this.state.session} />
      <TaskList tasks={this.state.tasks} />
    </div>
  }
}

function Header(props) {

  return <div className="row my-2">
    <div className="col-6">
      <h1>Task Tracker</h1>
      <h3>by Ashwin ShivaShankar</h3>
    </div>
    <div className="col-6">
    <EmailOrLogin session={props.session} />
  </div>
</div>;
}

function EmailOrLogin(props) {
  console.log(props.session);
  if(props.session == null) {
    return <div className="form-inline my-2">
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button className="btn btn-secondary">Login</button>
    </div>;
  }
  else {
    return <div className="float-sm-right">
    <p>Signed in as: {props.session.user_name}</p>
    <button className="btn btn-link" onClick={() => api.fetch_tasks()} >Logout</button>
    <a href="/">Profile</a>
    <br/>
    <a href="/">Logout</a>
    </div>;
  }
}



