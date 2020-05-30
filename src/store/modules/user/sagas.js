import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, password } = payload.data;

    let profile = {
      name,
      email,
    };
    if (password) {
      profile = { ...profile, password };
    }

    const response = yield call(api.put, 'users', profile);

    toast.success('Sucesso!', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export function* updateProvider({ payload }) {
  const { provider } = payload;

  yield call(api.put, 'users', { provider });
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_PROVIDER', updateProvider),
]);
