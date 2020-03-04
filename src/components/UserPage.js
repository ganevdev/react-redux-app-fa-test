import React from 'react';
import { useSelector } from 'react-redux';

function UserPage({ match }) {
  const user = useSelector(
    (state) => state.users.filter((u) => u.id === +match.params.id)[0]
  );

  return (
    <div>
      {user ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          <div style={{ marginRight: '18px' }}>
            <img
              src={user.avatar}
              alt={user.first_name + ' ' + user.last_name}
            />
          </div>
          <div>
            <h4>
              {user.first_name} {user.last_name}
            </h4>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default UserPage;
