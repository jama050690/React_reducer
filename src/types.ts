import type { Dispatch, SetStateAction } from "react"

export type Todo = {
	id: number
	name: string
}

export type Book = {
	id: number
	name: string
	category_name?: string
}

export type StoreState = {
	todos: Todo[]
}

export type AddTodoPayload = Pick<Todo, "name">

export type DropTodoPayload = Pick<Todo, "id">

export type PatchTodoPayload = {
	id: Todo["id"]
	changes: Partial<Omit<Todo, "id">>
}

export type PutTodoPayload = Todo

export type StoreAction =
	| {
		type: "TODO_ADD"
		value: AddTodoPayload
	}
	| {
		type: "TODO_DROP"
		value: DropTodoPayload
	}
	| {
		type: "TODO_PATCH"
		value: PatchTodoPayload
	}
	| {
		type: "TODO_PUT"
		value: PutTodoPayload
	}

export type TodoEvent =
	| {
		type: "ADD"
		todo: AddTodoPayload
	}
	| {
		type: "DROP"
		todo: DropTodoPayload
	}
	| {
		type: "PATCH"
		todo: PatchTodoPayload
	}
	| {
		type: "PUT"
		todo: PutTodoPayload
	}

export type StoreContextValue = {
	todos: Todo[]
	setTodos: (event: TodoEvent) => void
}

export type Language = "en" | "uz"

export type LanguageContextValue = [
	Language,
	Dispatch<SetStateAction<Language>>,
]

export type TodoContextValue = [
	Todo[],
	Dispatch<SetStateAction<Todo[]>>,
]

export type TranslationConfig = {
	copyright: string
	inputPlaceholder: string
	buttonAdd: string
	promotionText: (countOfPrizes: number) => string
}

export type Translations = Record<Language, TranslationConfig>
