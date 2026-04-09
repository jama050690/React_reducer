import type { DropTodoPayload, StoreState } from "../types"

export function dropTodo( state: StoreState, todo: DropTodoPayload ): StoreState {

	return {
		...state,
		todos: state.todos.filter( t => t.id !== todo.id ),
	}
}
