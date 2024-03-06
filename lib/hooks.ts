import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit"
import { RootState, AppDispatch } from "./store"

type TypedDispatch<Type> = ThunkDispatch<Type, any, UnknownAction>
export type ConnectedActions = (dispatch: AppDispatch) => void
export const useAppDispatch = (): TypedDispatch<RootState> => useDispatch<TypedDispatch<RootState>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector