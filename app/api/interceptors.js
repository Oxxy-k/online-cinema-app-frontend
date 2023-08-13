import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { API_URL } from '@/config/api.config'

import { errorCatch, getContentType } from './api.helpers'
import {
	JWT_EXPIRED_ERROR_RESPONSE_MESSAGE,
	JWT_MUST_BE_PROVIDED_ERROR_RESPONSE_MESSAGE,
} from '@/constants/messages'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === JWT_EXPIRED_ERROR_RESPONSE_MESSAGE ||
				errorCatch(error) === JWT_MUST_BE_PROVIDED_ERROR_RESPONSE_MESSAGE) &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getAccessToken()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === JWT_EXPIRED_ERROR_RESPONSE_MESSAGE)
					removeTokensStorage()
			}
		}

		throw error
	}
)

export default instance
