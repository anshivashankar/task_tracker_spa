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

