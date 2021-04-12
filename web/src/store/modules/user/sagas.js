import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api';
import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
   try {
        const { email, name, ...rest } = payload.data
        const profile = Object.assign(
            { name, email },
            rest.oldPassword ? rest : {}
        )
        const response = yield call(api.put, 'users', profile)
        yield put(updateProfileSuccess(response.data))
        toast.success('Perfil atualizado com sucesso!')
    } catch (err) {
       yield put(updateProfileFailure())
       toast.error('Erro ao atualizar perfil, confira seus dados!')
   }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])
