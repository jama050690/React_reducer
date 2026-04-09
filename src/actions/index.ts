import { addTodo } from "./addTodo"
import { dropTodo } from "./dropTodo"
import type { StoreAction, StoreState } from "../types"

const TodoActions = {
	TODO_ADD: addTodo,
	TODO_DROP: dropTodo,
} satisfies {
	[Key in StoreAction["type"]]: (
		state: StoreState,
		value: Extract<StoreAction, { type: Key }>["value"],
	) => StoreState
}

export default TodoActions
