import { useRef, useContext } from "react"
import type { FormEvent } from "react"

import { TodoContext } from "../../contexts/TodoContext"
import { LanguageContext } from "../../contexts/LanguageContext"
import { T } from "../../T.ts"
import type { Todo } from "../../types"

export function Header() {

	const inputRef = useRef<HTMLInputElement>( null )
	const [ , setTodos ] = useContext( TodoContext )
	const [ language ] = useContext( LanguageContext )

	const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {

		e.preventDefault()

		const name = inputRef.current?.value.trim()

		if ( !name || !inputRef.current ) {
			return
		}

		const newTodo: Todo = {
			id: Math.random(),
			name,
		}

		setTodos( todos => [ ...todos, newTodo ] )

		inputRef.current.value = ""
	}

	return (
		<header>
			<form onSubmit={ onSubmit }>
				<div>
					<input ref={ inputRef } placeholder={ T[ language ].inputPlaceholder } />
					<button>{ T[ language ].buttonAdd }</button>
				</div>
			</form>
		</header>
	)
}
