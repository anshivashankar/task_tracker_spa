
// root.jsx inspired by: https://github.com/NatTuck/husky_shop_spa/assets/js/root.jsx
// and http://www.ccs.neu.edu/home/ntuck/courses/2018/09/cs4550/notes/16-spa/notes.html

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
 export default function root_init(node) {
  ReactDOM.render(<Root />, node);
}
 class Root extends React.Component {
  render() {
    return <p>Hi</p>;
  }
}
