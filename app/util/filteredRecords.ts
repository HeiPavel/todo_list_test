import type { Record } from "@/lib/features/records"

export type FilterTerm = 'all' | 'completed' | 'current'

export const filteredRecords = (term: FilterTerm, records: Record[]): Record[] => {
  return term === 'all' ?
    records : 
    records.filter((record :Record) => term === 'completed' ? record.isComplete : !record.isComplete)
}