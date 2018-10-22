import React from 'react';

const User = ({ match }) => (
  <h3>User with ID {match.params.id}</h3>
);

export default User;