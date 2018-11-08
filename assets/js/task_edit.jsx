import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import api from './api';

export default connect(({users}) => ({users}))((props) => {
  //console.log("UserList(", props);
  return <div>
    <div className="col-12">
      <input className="form-control" id="time" type="number" placeholder="Time" />
      <br/>
      <input className="form-check-input" id="completion" type="checkbox" />
      <br/>
      <br/>
      <p onClick={() => api.create_task(
                                       $("#title").val(), 
                                       $("#description").val())}>
        <Link className="btn btn-primary" to={"/"}>Create new Task</Link></p>
    </div>
  </div>});
