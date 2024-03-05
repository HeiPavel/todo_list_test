import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { Dispatch } from "@reduxjs/toolkit"
import { RootState, AppDispatch } from "./store"

export type DispatchFunc = () => AppDispatch
export type ConnectedActions = (dispatch: Dispatch) => void
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector