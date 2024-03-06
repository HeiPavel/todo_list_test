import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState: InitialState = {
  records: [], 
  completedRecords: 0,
  uncompletedRecords: 0
}

export const recordsSlice = createSlice({
  name: 'records',
  initialState: initialState,
  reducers: {
    addRecord: (state, action: PayloadAction<AddRecordPayloadType>) => {
      state.records.push({
        ...action.payload,
        isComplete: false
      })
      state.uncompletedRecords++
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

export const selectRecords = (state: RootState): Record[] => state.records.records
export const {addRecord, updateCountOfRecordsStatus} = recordsSlice.actions
export default recordsSlice.reducer

export type Record = {
  id: string
  content: string
  isComplete: boolean
}

export type AddRecordPayloadType = {
  id: string
  content: string
}

export type InitialState = {
  records: Record[]
  completedRecords: number
  uncompletedRecords: number
}