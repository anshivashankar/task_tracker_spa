// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/user_list.jsx
import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
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
      <p><Link className="btn btn-primary" to={"/new-task"}>New Task</Link></p>
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
  let finished_button;
  if(task.completion == true) {
    finished_button = <button className="btn btn-link" onClick={() => api.mark_complete(task)}>Un-Finish</button>
  }
  else {
    finished_button = <button className="btn btn-link" onClick={() => api.mark_complete(task)}>Finish</button>
  }
  
  if(task.assigned_user == null) {
    assigned_user = "Not Assigned";
  }
  else {
    assigned_user = _.get(task, 'assigned_user');
    assigned_user = _.get(user_list[parseInt(assigned_user, 10)], 'name');
  }
  let task_time_id = "task-time-" + task.id;
  let time_new_id = "new-" + task_time_id;
  let hidden_style = {
    display: 'none'
  }
  let time_new_time = "time-" + task_time_id;

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
          min={0}
          type="number" /></td>
      <td> {symbol} </td>
      <td> {assigned_user} </td>
      <td> <button
      className="btn btn-link" 
      onClick={() => api.remove_task(task.id)}>Remove</button>
      {finished_button}
      </td>
    </tr>;
}



