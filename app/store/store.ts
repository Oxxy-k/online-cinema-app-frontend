import { configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

export const store = configureStore({
	reducer: {
		toastr: toastrReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
