// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
// App.js inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/app.js
// and http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html

import "phoenix_html";
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;
import "bootstrap";
import _ from "lodash";
import store from './store';
import api from './api';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"


import root_init from "./root";
 $(() => {
  let node = $('#root')[0];
  root_init(node, store);
});

window.editTime = (task_id) => {
  $("#task-time-" + task_id).hide();
  $('#new-task-time-' + task_id).show();
}

window.changeTime = (task) => {
  $("#task-time-" + task.id).show();
  $('#new-task-time-' + task.id).hide();
  let newTime = $('#time-task-time-' + task.id).val();
  if(newTime % 15 == 0 && newTime >= 0) {
    api.change_time(task, newTime);
  }
}

window.showUsers = (task_id, user_list) => {
  $("#user-assigned-add-" + task_id).show();
  $("#user-assigned-show-" + task_id).hide();
  let i;
  let id = "select-user-id-" + task_id;
  let user_select_html = "<select ";
  user_select_html += "id=" + id + " >";
  for(i=0; i != user_list.length; i++) {
    let user_name = _.get(user_list[i], 'name');
    let user_id = _.get(user_list[i], 'id');
    user_select_html += '<option value="';
    user_select_html += user_id + '">' + user_name;
    user_select_html += "</option>";
  }
  user_select_html += "</select>";
  $("#user-assigned-add-" + task_id).html(user_select_html);
}


window.changeAssigned = (task) => {
  console.log("comes here again");
  let newUser = $('#select-user-id-' + task.id).val();
  console.log(newUser);
  $("#user-assigned-add-" + task.id).hide();
  $("#user-assigned-show-" + task.id).show();
  $('#select-user-id-' + task.id).hide();
  api.assign_user(task, newUser);
}
