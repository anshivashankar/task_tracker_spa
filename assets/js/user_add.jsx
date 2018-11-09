import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import api from './api';

export default connect(({users}) => ({users}))((props) => {
  return <div>
    <div className="col-12">
      <p>Full Name</p>
      <input className="form-control" id="name" type="text" placeholder="Full Name" />
      <br/>
      <p>Email</p>
      <input className="form-control" id="create-email" type="email" placeholder="Email" />
      <br/>
      <p>Password</p>
      <input className="form-control" id="create-password" type="password" />
      <br/>
      <p onClick={() => api.create_user(
                                       $("#name").val(),
                                       $("#create-email").val(),
                                       $("#create-password").val())}>
        <Link className="btn btn-primary" to={"/"}>Register!</Link></p>
    </div>
  </div>});
