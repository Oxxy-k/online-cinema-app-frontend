import { createReducer } from '@reduxjs/toolkit'

import { checkAuth, login, logout, register } from '@/store/user/user.actions'
import { IUserSliceState } from '@/store/user/user.interface'

import { getStoreLocalStorage } from '@/utils/localStorage'

const initialState: IUserSliceState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
}

export const userReducer = createReducer(
	initialState,
	(builder) => {
		builder
			.addCase(register.pending, (state: IUserSliceState) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state: IUserSliceState, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state: IUserSliceState) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state: IUserSliceState) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state: IUserSliceState, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state: IUserSliceState) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state: IUserSliceState) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state: IUserSliceState, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
})
