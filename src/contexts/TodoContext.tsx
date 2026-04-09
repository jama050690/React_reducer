import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { Todo, TodoContextValue } from "../types"

const defaultSetTodos: Dispatch<SetStateAction<Todo[]>> = () => undefined

export const TodoContext = createContext<TodoContextValue>( [ [], defaultSetTodos ] )
