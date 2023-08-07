import { toastr } from 'react-redux-toastr'

import { errorCatch } from '../api/api.helpers'

import { ERROR_REQUEST } from '@/constants/messages'

export const toastrError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toastr.error(title || ERROR_REQUEST, message)
	throw message
}
