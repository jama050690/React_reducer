import type { PatchTodoPayload, StoreState } from "../types"

export function patchTodo( state: StoreState, payload: PatchTodoPayload ): StoreState {

	return {
		...state,
		todos: state.todos.map( todo => {

			if ( todo.id !== payload.id ) {
				return todo
			}

			return {
				...todo,
				...payload.changes,
			}
		} ),
	}
}
