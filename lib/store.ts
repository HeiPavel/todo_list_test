import { configureStore, type EnhancedStore } from "@reduxjs/toolkit"
import recordsReducer from './features/records'

export const makeStore = (): EnhancedStore => {
  return configureStore({
    reducer: {
      records: recordsReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']