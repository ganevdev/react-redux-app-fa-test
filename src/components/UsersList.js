import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions';
import FormForCreatingNewUser from './FormForCreatingNewUser';
import Pagination from './Pagination';
import UserInList from './UserInList';

let UsersList = ({ users }) => {
  return (
    <div>
      {users
        ? users.map((u) => {
            return (
              <UserInList
                key={u.id}
                firstName={u.first_name}
                lastName={u.last_name}
                avatar={u.avatar}
                email={u.email}
                id={u.id}
              />
            );
          })
        : null}
      <Pagination />
      <FormForCreatingNewUser />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = {
  getUsers: getUsers,
};

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersList;
