import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormForCreatingNewUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  function createNewUser() {
    dispatch({
      type: 'CREATE_NEW_USER',
      payload: {
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: avatar,
      },
    });
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>Форма для создания нового юзера</h2>
      <div>
        Имя:{' '}
        <input
          type="text"
          value={firstName}
          placeholder="Имя"
          onChange={(v) => setFirstName(v.target.value)}
        />
        Фамилия:{' '}
        <input
          type="text"
          value={lastName}
          placeholder="Фамилия"
          onChange={(v) => setLastName(v.target.value)}
        />
        Email:{' '}
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(v) => setEmail(v.target.value)}
        />
        Аватар:{' '}
        <input
          type="text"
          value={avatar}
          placeholder="Аватар"
          onChange={(v) => setAvatar(v.target.value)}
        />
      </div>
      <button onClick={() => createNewUser()}>Добавить пользователя</button>
    </div>
  );
}

export default FormForCreatingNewUser;
