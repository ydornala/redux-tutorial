import { configureStore } from '@reduxjs/toolkit'
import { commonReducer } from './redux';

export default configureStore({
  reducer: commonReducer,
});