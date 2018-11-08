// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/api.js

import store from './store';

class TheServer {

  fetch_path(path, callback) {
    $.ajax(path, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: callback,
    });
  }

  fetch_tasks() {
    this.fetch_path(
      "/api/tasks",
      (resp) => {
        store.dispatch({
          type: 'TASK_LIST',
          data: resp.data,
        });
      }
    );
  }

  fetch_users() {
    this.fetch_path(
      "/api/users",
      (resp) => {
        store.dispatch({
          type: 'USER_LIST',
          data: resp.data,
        });
      }
    );
  }

  create_session(email, password) {
    $.ajax("/api/sessions", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({email, password}),
      success: (resp) => {
        store.dispatch({
          type: 'NEW_SESSION',
          data: resp.data,
        });
      }
    });
  }

  create_task(title, description) {
    let data = {};
    data.title = title;
    data.description = description;
    data.time = 0;
    $.ajax("/api/tasks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ task: data }),
      success: (resp) => {
        this.fetch_tasks();
      }
    });
  }

  mark_complete(task) {
    task.completion = !task.completion;
    let task_id = task.id
    $.ajax(("/api/tasks/" + task_id), {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ task: task }),
      success: (resp) => {
        this.fetch_tasks();
      }
    });
  }

  remove_task(task_id) {
    $.ajax(('/api/tasks/' + task_id), {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        this.fetch_tasks();
      }
    });
  }

  delete_session(user_id) {
    store.dispatch({
      type: 'DELETE_SESSION',
      data: null,
    });
  }

  send_post(path, data, callback) {
    $.ajax(path, {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: callback,
    });
  }
}

export default new TheServer();
