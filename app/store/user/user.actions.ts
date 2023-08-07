import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { toastrError } from '@/utils/toastrError'

import { errorCatch } from '../../api/api.helpers'

import * as M from '@/constants/messages'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success(M.REGISTRATION, M.COMMON_SUCCESS)
			return response
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success(M.REGISTRATION, M.COMMON_SUCCESS)
			return response
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
	return
})

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			return await AuthService.getAccessToken()
		} catch (error) {
			if (errorCatch(error) === M.JWT_EXPIRED_ERROR_RESPONSE_MESSAGE) {
				toastr.error(M.LOGOUT_ERROR_TITLE, M.JWT_EXPIRED_ERROR_MESSAGE)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(error)
		}
	}
)
