import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

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
    }
  }
})

export const selectTerm = (state: RootState): string => state.form.term
export const {changeTerm} = formSlice.actions
export default formSlice.reducer