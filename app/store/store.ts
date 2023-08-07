import { configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { userReducer } from './user/user.slice'

export const store = configureStore({
	reducer: {
		toastr: toastrReducer,
		user: userReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
