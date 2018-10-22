import React from 'react';

import {
  Link
} from 'react-router-dom';

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