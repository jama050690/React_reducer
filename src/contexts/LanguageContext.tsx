import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { Language, LanguageContextValue } from "../types"

const defaultSetLanguage: Dispatch<SetStateAction<Language>> = () => undefined

export const LanguageContext = createContext<LanguageContextValue>( [ "uz", defaultSetLanguage ] )
