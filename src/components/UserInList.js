import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const UserInList = ({ firstName, lastName, avatar, email, id }) => {
  const dispatch = useDispatch();
  const [deletedUser, setDeletedUser] = useState(false);

  function deleteUser() {
    dispatch({ type: 'DELETE_USER', payload: { id: id } });
    setDeletedUser(true);
  }

  return (
    <div style={{ marginBottom: '40px' }}>
      <Link to={deletedUser ? '/' : `/user/${id}`}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '16px',
            marginBottom: '4px',
            textDecoration: deletedUser ? 'line-through' : null,
          }}
        >
          <div style={{ marginRight: '18px' }}>
            <img src={avatar} alt={firstName + ' ' + lastName} />
          </div>
          <div>
            <h4>
              {firstName} {lastName}
            </h4>
            <p>{email}</p>
          </div>
        </div>
      </Link>
      <button onClick={() => deleteUser()}>
        УДАЛИТЬ {firstName} {lastName}
      </button>
    </div>
  );
};

export default UserInList;
