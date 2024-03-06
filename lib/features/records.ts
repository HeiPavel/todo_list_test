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
    changeStatus: (state, action: PayloadAction<string>) => {
      const record = state.records.find(rec => rec.id === action.payload)
      if (record?.isComplete !== undefined) record.isComplete = !record.isComplete
      if (record?.isComplete) {
        state.completedRecords++
        state.uncompletedRecords--
      } else {
        state.completedRecords--
        state.uncompletedRecords++
      }
    },
    removeRecord: (state, action: PayloadAction<string>) => {
      const index = state.records.findIndex(rec => rec.id === action.payload)
      state.records[index].isComplete ? state.completedRecords-- : state.uncompletedRecords--
      state.records.splice(index, 1)
    }
  } 
})

export const selectRecords = (state: RootState): Record[] => state.records.records
export const {addRecord, changeStatus, removeRecord} = recordsSlice.actions
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