// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/user_list.jsx
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


export default connect(({tasks}) => ({tasks}))((props) => {
  console.log("TaskList(", props);
  let tks = _.map(props.tasks, (t) => <Task key={t.id} task={t} />);
  //let rows = _.map(props.tasks, (tt) => <Task key={tt.id} task={tt} />);
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

