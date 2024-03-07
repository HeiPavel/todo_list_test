import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState: InitialState = {
  records: [],
  stats: {
    completed: 0,
    uncompleted: 0
  } 
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
      state.stats.uncompleted++
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      const record = state.records.find(rec => rec.id === action.payload)
      if (record?.isComplete !== undefined) record.isComplete = !record.isComplete
      if (record?.isComplete) {
        state.stats.completed++
        state.stats.uncompleted--
      } else {
        state.stats.completed--
        state.stats.uncompleted++
      }
    },
    removeRecord: (state, action: PayloadAction<string>) => {
      const index = state.records.findIndex(rec => rec.id === action.payload)
      state.records[index].isComplete ? state.stats.completed-- : state.stats.uncompleted--
      state.records.splice(index, 1)
    }
  } 
})

export const selectStats = (state: RootState): StatsType => state.records.stats
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
  stats: StatsType
}

export type StatsType = {
  completed: number
  uncompleted: number
}