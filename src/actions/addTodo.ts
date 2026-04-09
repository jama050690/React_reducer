import type { AddTodoPayload, StoreState } from "../types"

export function addTodo( state: StoreState, todo: AddTodoPayload ): StoreState {

	return {
		...state,
		todos: [
			...state.todos,
			{
				id: Math.random(),
				name: todo.name,
			},
		],
	}
}
