import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsReducer';

export default configureStore({
  reducer: {
   missionsReducer: missionsReducer
  },
});
