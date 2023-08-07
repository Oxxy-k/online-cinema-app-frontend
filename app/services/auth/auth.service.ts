import { api } from 'api/api'
import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

import { removeTokensStorage, saveToStorage } from '@/services/auth/auth.helper'

import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from '../../api/api.helpers'

export const AuthService = {
	async register(email: string, password: string): AxiosResponse<any> {
		const response = await api.post<IAuthResponse>(getAuthUrl('/register'), {
			email,
			password,
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async login(email: string, password: string): AxiosResponse<any> {
		const response = await api.post<IAuthResponse>(getAuthUrl('/login'), {
			email,
			password,
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},

	async getAccessToken() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await api.post<IAuthResponse>(
			getAuthUrl('login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},
}
