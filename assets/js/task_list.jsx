// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/user_list.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import api from './api';

var user_list;
var session;

export default connect(({session, tasks, users}) => ({session, tasks, users}))((props) => {
  user_list = props.users;
  session = props.session;
  tasks = props.tasks.sort((t1, t2) => t1.id - t2.id);
  let tks = _.map(tasks, (t) => <Task key={t.id} task={t} />);
  let new_task = <p></p>;
  if(session != null) {
    new_task = <p><Link className="btn btn-primary" to={"/new-task"}>New Task</Link></p>;
  }

  return <div className="row">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Time Taken</th>
            <th>Completion</th>
            <th>Assigned User</th>
            <th> </th>
          </tr>
        </thead>
      <tbody>
        {tks}
      </tbody>
      </table>
      {new_task}
    </div>;
});

function Task(props) {
  let {task} = props;
  let symbol;
  let assigned_user;
  if(task.completion) {
    symbol = "✔";
  }
  else {
    symbol = "✖";
  }

  if(task.assigned_user == null) {
    assigned_user = "Not Assigned";
  }
  else {
    assigned_user = _.get(task, 'assigned_user');
    assigned_user = _.get(user_list[parseInt(assigned_user, 10) - 1], 'name');
  }
  let task_time_id = "task-time-" + task.id;
  let time_new_id = "new-" + task_time_id;
  let time_new_time = "time-" + task_time_id;

  let hidden_style = {
    display: 'none'
  }

  let user_new_id = "user-assigned-add-" + task.id;
  let user_show_id = "user-assigned-show-" + task.id;

  let remove_button = <p></p>;

  if(session != null) {
    remove_button = <button
      className="btn btn-link" 
      onClick={() => api.remove_task(task.id)}>Remove</button>;
  }

  return <tr>
      <td> {task.title} </td>
      <td> {task.description} </td>
      <td id={task_time_id} 
          onClick={() => window.editTime(task.id)}>{task.time}</td>
      <td id={time_new_id}
          style={hidden_style}><input id={time_new_time} 
          onBlur={() => window.changeTime(task)}
          step={15}
          defaultValue={task.time}
          type="number" /></td>
      <td onClick={() => api.mark_complete(task)}
          > {symbol} </td>
      <td id={user_show_id}
          onClick={() => window.showUsers(task.id, user_list)}
          > {assigned_user} </td>
      <td id={user_new_id}
          onBlur={() => window.changeAssigned(task)}
          style={hidden_style}></td>
      <td> {remove_button}
      </td>
    </tr>;
}



