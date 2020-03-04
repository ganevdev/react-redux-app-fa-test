import { all, put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
  const { page } = action.payload;

  const json = yield fetch('https://reqres.in/api/users?page=' + page)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  yield put({ type: 'USERS_RECEIVED', json: json });
}

function* deleteUser(action) {
  const { id } = action.payload;
  yield fetch('https://reqres.in/api/users/' + id, { method: 'DELETE' })
    .then((response) =>
      response.status !== 204
        ? console.error('при удалении пришел не правильный ответ от API')
        : ''
    )
    .catch((error) => console.error(error));
}

function* createNewUser(action) {
  yield fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(action.payload),
  })
    .then((response) =>
      response.status !== 201
        ? console.error('при создании пришел не правильный ответ от API')
        : ''
    )
    .catch((error) => console.error(error));
}

function* actionWatcher() {
  yield takeLatest('GET_USERS', fetchUsers);
  yield takeLatest('DELETE_USER', deleteUser);
  yield takeLatest('CREATE_NEW_USER', createNewUser);
}

function* rootSaga() {
  yield all([actionWatcher()]);
}

export default rootSaga;
