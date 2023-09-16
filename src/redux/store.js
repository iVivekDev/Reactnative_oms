import {configureStore} from '@reduxjs/toolkit';
import {AuthApi} from './AuthSlice';

const store = configureStore({
  reducer: {
    auth: AuthApi,
  },
});
export default store;
