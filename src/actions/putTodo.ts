import type { PutTodoPayload, StoreState } from "../types"

export function putTodo( state: StoreState, nextTodo: PutTodoPayload ): StoreState {

	return {
		...state,
		todos: state.todos.map( todo => {

			if ( todo.id !== nextTodo.id ) {
				return todo
			}

			return nextTodo
		} ),
	}
}
