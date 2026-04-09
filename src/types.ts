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

export type StoreAction =
	| {
		type: "TODO_ADD"
		value: AddTodoPayload
	}
	| {
		type: "TODO_DROP"
		value: DropTodoPayload
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
