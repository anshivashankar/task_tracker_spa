// inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/store.js

import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';


/*
 Our application state is:
  {
  tasks: [],    // List of Tasks
  users: [], // List of User
  session: null,   // Maybe<SessionInfo>
  add_task_forms: new Map(),   // Map<product_id => count>
 }

 functions we want:

 1. list tasks
 2. List users (for assign)
 3. Get session (login)
 4. Delete session (logout)
 5. Add Task (for creating task)
 6. Assign task (for assign user)
 7. Edit task 
 6. Create new user (for registering)

 */

// list tasks
function tasks(state0 = [], action) {
  switch (action.type) {
  case 'TASK_LIST':
    return action.data;
  case 'ADD_TASK':
    return action.data;
  case 'DELETE_TASK':
    return action.data;
  case 'EDIT_TASK':
    return action.data;
  default:
    return state0;
  }
}

// list users
function users(state0 = [], action) {
  switch (action.type) {
  case 'USER_LIST':
    return action.data;
  case 'ADD_USER':
    return action.data;
  default:
    return state0;
  }
}

// create or delete new session
function session(state0 = null, action) {
  switch (action.type) {
  case 'NEW_SESSION':
    return action.data;
  case 'DELETE_SESSION':
    return null;
  default:
    return state0;
  }
}


function root_reducer(state0, action) {
  console.log("reducer", state0, action);
   let reducer = combineReducers({tasks, users, session});
  let state1 = reducer(state0, action);
   console.log("state1", state1);
  return state1;
}


let store = createStore(root_reducer);
export default store;

