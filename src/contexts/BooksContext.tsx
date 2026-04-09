import { createContext } from "react"
import type { Book } from "../types"

export const BooksContext = createContext<Book[]>( [] )
