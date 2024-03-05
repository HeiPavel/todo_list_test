import { createSlice, type PayloadAction, type Dispatch } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import type { ConnectedActions } from "../hooks"

const initialState: InitialState = {
  records: [], 
  filteredRecords: [],
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
    filterRecords: (state) => {
      state.filteredRecords = state.filterTerm === 'all' ? 
        state.records : 
        state.records.filter((record :Record) => state.filterTerm === 'completed' ? record.isComplete : !record.isComplete)
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

export const selectFilteredRecords = (state: RootState): Record[] => state.records.filteredRecords
export const {addRecord, filterRecords, changeFilterTerm, updateCountOfRecordsStatus} = recordsSlice.actions

export const addAndFilterRecords = (payload: string): ConnectedActions => {
  return (dispatch: Dispatch) => {
    dispatch(addRecord(payload))
    dispatch(filterRecords())
  }
}
export default recordsSlice.reducer

export type Record = {
  content: string
  isComplete: boolean
}

export type FilterTerm = 'all' | 'completed' | 'uncompleted'

export type InitialState = {
  records: Record[]
  filteredRecords: Record[]
  filterTerm: FilterTerm
  completedRecords: number
  uncompletedRecords: number
}