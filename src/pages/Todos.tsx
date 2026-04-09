import { useContext } from "react"
import type { KeyboardEvent } from "react"
import { StoreContext } from "../contexts/StoreContext"

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

	return (
		<>
			<h1>Todos</h1>

			<input onKeyUp={ onKeyUp } />

			<ul>
				{ todos.map( todo => (
					<li
						key={ todo.id }
						onClick={ () => setTodos( { type: "DROP", todo: { id: todo.id } } ) }
					>
						{ todo.name }
					</li>
				) ) }
			</ul>
		</>
	)
}
