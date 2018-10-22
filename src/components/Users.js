import React from 'react';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import User from './User';

const Users = ({ match }) => (
  <div>
    {
      getUserList().map(user =>  
        <h2 key={user.id}>
          <Link to={`${match.url}/${user.id}`}>
            User {user.id}
          </Link>
        </h2>
      )
    }
    <Switch>
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a user from the list</h3>}
      />
      <Route path={`${match.url}/:id(\\d+)`} component={User} />
    </Switch>
  </div>
);

const getUserList = () => {
 const list = [];
  for(let i = 1; i <= 5; i++) {
    list.push({id: i})
  }
  return list;  
}

export default Users;