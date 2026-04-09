import { addTodo } from "./addTodo"
import { dropTodo } from "./dropTodo"
import { patchTodo } from "./patchTodo"
import { putTodo } from "./putTodo"
import type {
	AddTodoPayload,
	DropTodoPayload,
	PatchTodoPayload,
	PutTodoPayload,
	StoreAction,
	StoreState,
} from "../types"

export const todoActionCreators = {
	add: ( value: AddTodoPayload ): StoreAction => ( {
		type: "TODO_ADD",
		value,
	} ),
	drop: ( value: DropTodoPayload ): StoreAction => ( {
		type: "TODO_DROP",
		value,
	} ),
	patch: ( value: PatchTodoPayload ): StoreAction => ( {
		type: "TODO_PATCH",
		value,
	} ),
	put: ( value: PutTodoPayload ): StoreAction => ( {
		type: "TODO_PUT",
		value,
	} ),
}

const TodoActions = {
	TODO_ADD: addTodo,
	TODO_DROP: dropTodo,
	TODO_PATCH: patchTodo,
	TODO_PUT: putTodo,
} satisfies {
	[Key in StoreAction["type"]]: (
		state: StoreState,
		value: Extract<StoreAction, { type: Key }>["value"],
	) => StoreState
}

export default TodoActions
