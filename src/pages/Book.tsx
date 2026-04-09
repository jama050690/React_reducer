import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router"
import { Navigation } from "../components/Navigation"

import { BooksContext } from "../contexts/BooksContext"
import type { Book as BookType } from "../types"

export function Book() {

	const { id } = useParams<{ id: string }>()

	const books = useContext( BooksContext )
	const [ book, setBook ] = useState<BookType | null>( null )

	function getBookById( bookId: number ): BookType | null {

		return books.find( b => b.id === bookId ) ?? null
	}

	useEffect( () => {

		if ( !id ) {
			setBook( null )

			return
		}

		const bookId = Number( id )

		setBook( Number.isNaN( bookId ) ? null : getBookById( bookId ) )

	}, [ books, id ] )

	return (
		<>
			<Navigation />

			{
				book === null && <>No Book</>
			}

			{
				book && (
					<>
						{ book.name }
					</>
				)
			}
		</>
	)
}
