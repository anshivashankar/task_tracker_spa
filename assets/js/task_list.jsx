// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/user_list.jsx
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

var user_list;

export default connect(({tasks, users}) => ({tasks, users}))((props) => {
  console.log("TaskList(", props);
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
          </tr>
        </thead>
      <tbody>
        {tks}
      </tbody>
      </table>
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
  
  // TODO finish this!
  //console.log("Assigned_user:", task.assigned_user);
  //console.log("THING",user_list[task.assigned_user]);
  assigned_user = _.get(task, 'assigned_user', "Not Assigned");
  //assigned_user = user_list[task.assigned_user];


  return <tr>
      <td> {task.title} </td>
      <td> {task.description} </td>
      <td> {task.time} </td>
      <td> {symbol} </td>
      <td> {assigned_user} </td>
    </tr>;
}

