// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/user_list.jsx
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import api from './api';

var user_list;

export default connect(({tasks, users}) => ({tasks, users}))((props) => {
  user_list = props.users;
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
            <th> </th>
          </tr>
        </thead>
      <tbody>
        {tks}
      </tbody>
      </table>
      <a href="/new-task" className="btn btn-primary">New Task</a>
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
  
  // TODO actually get the name.
  if(task.assigned_user == null) {
    assigned_user = "Not Assigned";
  }
  else {
    assigned_user = _.get(task, 'assigned_user', "Not Assigned");
  }

  return <tr>
      <td> {task.title} </td>
      <td> {task.description} </td>
      <td> {task.time} </td>
      <td> {symbol} </td>
      <td> {assigned_user} </td>
      <td> <button onClick={() => api.remove_task(task.id)}>Remove</button></td>
    </tr>;
}

