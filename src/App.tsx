import "./App.css"
import { useState, useEffect } from "react"
import type { ChangeEvent } from "react"
import type { Book } from "./types"

type CountsResponse = {
	books: {
		all: number
		science: number
	}
	computers: {
		all: number
	}
}

type PaginationProps = {
	countOfButtons: number
	countOfPages: number
	currentPage: number
	onChange: ( page: number ) => void
}

async function getCounts(): Promise<CountsResponse> {

	return {
		books: {
			all: 100,
			science: 20,
		},
		computers: {
			all: 100,
		},
	}
}

function Pagination( { countOfButtons, countOfPages, currentPage, onChange }: PaginationProps ) {

	const visibleButtonCount = Math.min(
		countOfButtons,
		Math.max( 0, Math.ceil( countOfPages / 2 - 1 ) ),
	)

	return (
		<ul className="pagination">
			<li>
				<button
					disabled={ currentPage - visibleButtonCount < 1 }
					onClick={ () => onChange( currentPage - 1 ) }
				>
					Aqa
				</button>
			</li>
			{
				new Array( visibleButtonCount * 2 + 1 ).fill( 0 ).map( ( _, i ) => {

					const pageNumber = currentPage - visibleButtonCount + i

					return (
						<li key={ i }>
							<button
								className={ pageNumber === currentPage ? "current" : undefined }
								onClick={ () => onChange( pageNumber ) }
							>{ pageNumber }</button>
						</li>
					)
				} )
			}
			<li>
				<button
					disabled={ currentPage + visibleButtonCount > countOfPages }
					onClick={ () => onChange( currentPage + 1 ) }
				>
					baqa
				</button>
			</li>
		</ul>
	)
}

export function App() {

	const [ isLoading, setIsLoading ] = useState( true )
	const [ category, setCategory ] = useState( "0" )
	const [ count, setCount ] = useState( 1 )
	const [ page, setPage ] = useState( 1 )
	const [ countOfPages, setCountOfPages ] = useState( 0 )
	const [ books, setBooks ] = useState<Book[]>( [] )

	useEffect( () => {

		( async () => {

			const counts = await getCounts()

			setCountOfPages( Math.ceil( counts.books.all / count ) )
		} )()
	}, [ count ] )

	useEffect( () => {

		setIsLoading( true )

		const query = new URLSearchParams( {
			category,
			count: String( count ),
			page: String( page ),
		} )

		fetch( `http://localhost:3100/books?${ query.toString() }` )
			.then( response => response.json() )
			.then( ( nextBooks: Book[] ) => {

				setBooks( nextBooks )
				setIsLoading( false )
			} )
			.catch( () => {

				setBooks( [] )
				setIsLoading( false )
			} )
	}, [ category, count, page ] )

	const onCategoryChange = ( evt: ChangeEvent<HTMLSelectElement> ) => {

		setCategory( evt.target.value )
		setPage( 1 )
	}

	const onCountChange = ( evt: ChangeEvent<HTMLSelectElement> ) => {

		setCount( Number( evt.target.value ) )
		setPage( 1 )
	}

	return (
		<div id="app">

			<div className="inputs">
				<select
					value={ category }
					onChange={ onCategoryChange }
				>
					<option value="0">All</option>
					<option value="1">Fiction</option>
					<option value="2">Science</option>
					<option value="3">History</option>
					<option value="4">Technology</option>
					<option value="5">Philosophy</option>
					<option value="6">Business</option>
					<option value="7">Fantasy</option>
					<option value="8">Mystery</option>
					<option value="9">Romance</option>
					<option value="10">Biography</option>
				</select>

				<select
					value={ count }
					onChange={ onCountChange }
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			{ isLoading && <div className="loader"></div> }

			{
				books.length > 0 && (
					<ul className="books">
						{
							books.map( book => ( <li key={ book.id }>
								<p>{ book.name }</p>
								<p className="category">{ book.category_name ?? "" }</p>
							</li> ) )
						}
					</ul>
				)
			}

			{
				!isLoading && !books.length && <>No data</>
			}

			<Pagination
				countOfPages={ countOfPages }
				countOfButtons={ 2 }
				currentPage={ page }
				onChange={ setPage }
			/>

			<button className="loadMore" onClick={ () => setPage( page + 1 ) }>Load more ({ page })</button>

		</div>
	)
}
