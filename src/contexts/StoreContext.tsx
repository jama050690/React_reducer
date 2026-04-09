import { createContext } from "react"
import TodoActions from "../actions"
import type { StoreAction, StoreContextValue, StoreState } from "../types"

const defaultStoreContext: StoreContextValue = {
	todos: [],
	setTodos: () => undefined,
}

export function reducer( state: StoreState, action: StoreAction ): StoreState {

	switch ( action.type ) {
		case "TODO_ADD":
			return TodoActions.TODO_ADD( state, action.value )
		case "TODO_DROP":
			return TodoActions.TODO_DROP( state, action.value )
		case "TODO_PATCH":
			return TodoActions.TODO_PATCH( state, action.value )
		case "TODO_PUT":
			return TodoActions.TODO_PUT( state, action.value )
	}
}

export const StoreContext = createContext<StoreContextValue>( defaultStoreContext )
