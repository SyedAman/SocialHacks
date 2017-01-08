// Client entry point, imports all client code

import { Meteor } from 'meteor/meteor';
import { ReactDOM } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
