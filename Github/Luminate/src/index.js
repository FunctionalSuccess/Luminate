/**
 *  This is your application entry file
 *
 *  we've included some default code for you. we don't recommend you edit this
 *  unless you're absolutely sure what you're doing
 */
import ReactDOM from 'react-dom';
import React from 'react';
import './stylesheets/app.css';
export default Component => {
  const targetEl = document.getElementById('root');
  if (targetEl.hasChildNodes()) {
    ReactDOM.hydrate(<Component />, targetEl);
  } else {
    ReactDOM.render(<Component />, targetEl);
  }
};
