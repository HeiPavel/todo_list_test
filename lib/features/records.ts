import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState: InitialState = {
  records: [], 
  filterTerm: 'all', 
  completedRecords: 0,
  uncompletedRecords: 0
}

export const recordsSlice = createSlice({
  name: 'records',
  initialState: initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<string>) => {
      state.records.push({
        content: action.payload,
        isComplete: false
      })
      state.uncompletedRecords++
    },
    changeFilterTerm: (state, action: PayloadAction<FilterTerm>) => {
      state.filterTerm = action.payload
    },
    updateCountOfRecordsStatus: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.completedRecords++
        state.uncompletedRecords--
      } else {
        state.completedRecords--
        state.uncompletedRecords++
      }
    }
  }
})

export const selectFilteredRecords = (state: RootState): Record[] => {
  return state.records.filterTerm === 'all' ?
    state.records.records :
    state.records.records.filter((record :Record) => state.records.filterTerm === 'completed' ? record.isComplete : !record.isComplete)
}
export const {addRecord, changeFilterTerm, updateCountOfRecordsStatus} = recordsSlice.actions
export default recordsSlice.reducer

export type Record = {
  content: string
  isComplete: boolean
}

export type FilterTerm = 'all' | 'completed' | 'uncompleted'

export type InitialState = {
  records: Record[]
  filterTerm: FilterTerm
  completedRecords: number
  uncompletedRecords: number
}