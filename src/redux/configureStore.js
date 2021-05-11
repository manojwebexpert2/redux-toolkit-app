import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

export default configureStore({
  reducer: {

    /// name of reducer : import name of that reducer
    counter:counterReducer
  },
})
