import { createStore } from "redux"
import { Reducer } from "./userData"

export const store = createStore(Reducer)