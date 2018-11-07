import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import api from './api';

export default connect(({session}) => ({session}))((props) => {
  console.log("Session:", props);
  return <div className="row my-2">
    <div className="col-6">
      <h1>Task Tracker</h1>
      <h3>by Ashwin ShivaShankar</h3>
    </div>
    <div className="col-6">
      <EmailOrLogin session={props.session} />
    </div>
  </div>;
});

function EmailOrLogin(props) {
  if(props.session == null) {
    return <div className="form-inline my-2">
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button className="btn btn-secondary">Login</button>
    </div>;
  }
  else {
    return <div className="float-sm-right">
    <p>Signed in as: {props.session.user_name}</p>
    <button className="btn btn-link" onClick={() => api.fetch_tasks()} >Logout</button>
    </div>;
  }
}
