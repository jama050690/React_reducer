import { useContext } from "react"
import type { KeyboardEvent } from "react"
import { StoreContext } from "../contexts/StoreContext"
import type { Todo } from "../types"

export function Todos() {

	const { todos, setTodos } = useContext( StoreContext )

	const onKeyUp = ( e: KeyboardEvent<HTMLInputElement> ) => {

		if ( e.code !== "Enter" ) {
			return
		}

		const name = e.currentTarget.value.trim()

		if ( !name ) {
			return
		}

		setTodos( { type: "ADD", todo: { name } } )
		e.currentTarget.value = ""
	}

	const patchTodo = ( todo: Todo ) => {

		const name = window.prompt( "Yangi nom", todo.name )?.trim()

		if ( !name ) {
			return
		}

		setTodos( {
			type: "PATCH",
			todo: {
				id: todo.id,
				changes: { name },
			},
		} )
	}

	const putTodo = ( todo: Todo ) => {

		const name = window.prompt( "Yangi nom", todo.name )?.trim()

		if ( !name ) {
			return
		}

		setTodos( {
			type: "PUT",
			todo: {
				...todo,
				name,
			},
		} )
	}

	return (
		<>
			<h1>Todos</h1>
			<p>Enter = add, nom ustiga double click = patch, tugma = put yoki delete.</p>

			<input onKeyUp={ onKeyUp } />

			<ul>
				{ todos.map( todo => (
					<li key={ todo.id }>
						<span onDoubleClick={ () => patchTodo( todo ) }>
							{ todo.name }
						</span>
						{" "}
						<button type="button" onClick={ () => putTodo( todo ) }>
							Put
						</button>
						{" "}
						<button
							type="button"
							onClick={ () => setTodos( { type: "DROP", todo: { id: todo.id } } ) }
						>
							Delete
						</button>
					</li>
				) ) }
			</ul>
		</>
	)
}
