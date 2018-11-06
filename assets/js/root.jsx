
// root.jsx inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/root.jsx
// and http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';

export default function root_init(node) {
  let tasks = window.tasks;
  ReactDOM.render(<Root tasks={tasks} />, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      session: null
    };
    this.create_session("testing@email.com", "password2");
  }

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
    <a href="/">Profile</a>
    <br/>
    <a href="/">Logout</a>
    </div>;
  }
}

function TaskList(props) {
  let tks = _.map(props.tasks, (t) => <Task key={t.id} task={t} />);
  return <div className="row">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Time Taken</th>
            <th>Completion</th>
            <th>Assigned User</th>
          </tr>
        </thead>
      <tbody>
        {tks}
      </tbody>
      </table>
    </div>;
}

function Task(props) {
  let {task} = props;
  let symbol;
  if(task.completion) {
    symbol = "✔";
  }
  else {
    symbol = "✖";
  }

  return <tr>
      <td> {task.title} </td>
      <td> {task.description} </td>
      <td> {task.time} </td>
      <td> {symbol} </td>
      <td> {task.assigned_user_id} </td>
    </tr>;
}



