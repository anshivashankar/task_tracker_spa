import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import api from './api';

export default connect(({users}) => ({users}))((props) => {
  return <div>
    <div className="col-12">
      <input className="form-control" id="title" type="text" placeholder="Title" />
      <br/>
      <input className="form-control" id="description" type="text" placeholder="Description" />
      <br/>
      <p onClick={() => api.create_task(
                                       $("#title").val(), 
                                       $("#description").val())}>
        <Link className="btn btn-primary" to={"/"}>Create new Task</Link></p>
    </div>
  </div>});
