import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import api from './api';

export default connect(({users}) => ({users}))((props) => {
  console.log("UserList(", props);
  return <div>
    <div className="col-12">
      <input className="form-control" id="title" type="text" placeholder="Title" />
      <br/>
      <input className="form-control" id="description" type="text" placeholder="Description" />
      <br/>
      <button
        className="btn btn-primary"
        onClick={() => api.create_task($("#title").val(), 
                                       $("#description").val())} >Create new Task</button>
    </div>
  </div>});
