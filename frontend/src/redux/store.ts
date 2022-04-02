import { configureStore } from '@reduxjs/toolkit';
import logsReducer from './logsSlice';
import authReducer from './authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
	reducer: {
		journal: logsReducer,
		auth: authReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
