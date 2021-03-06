import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
// import ws from '~/services/ws';
import history from '~/services/history';
// import handleLogin from '~/ws/LoginWs';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    // ws.withJwtToken(token).connect();

    // handleLogin({ user_id: user.id });

    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (err) {
    toast.error('Falha na Autenticação, verifique seus dados');
    console.tron.log(err);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function handleLogout() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', handleLogout),
]);
