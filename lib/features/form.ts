import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { addRecord, type AddRecordPayloadType } from "./records"
import type { ConnectedActions } from "../hooks"

type InitialState = {
  term: string
}

const initialState: InitialState = {
  term: ''
}

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    clearTerm: (state) => {
      state.term = ''
    }
  }
})

export const selectTerm = (state: RootState): string => state.form.term
export const {changeTerm, clearTerm} = formSlice.actions
export const addRecordAndClearTerm = (payload: AddRecordPayloadType): ConnectedActions => {
  return dispatch => {
    dispatch(clearTerm())
    dispatch(addRecord(payload))
  }
}

export default formSlice.reducer