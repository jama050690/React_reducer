import "./App.css";
import { useReducer } from "react";
import { Todos } from "./pages/Todos";
import { StoreContext, reducer } from "./contexts/StoreContext";
import { todoActionCreators } from "./actions";
import { data } from "./data/data";
import type { TodoEvent } from "./types";

export function App() {
  const [{ todos }, dispatcher] = useReducer(reducer, data);

  const setTodos = (evt: TodoEvent) => {
    switch (evt.type) {
      case "ADD":
        dispatcher(todoActionCreators.add(evt.todo));
        return;
      case "DROP":
        dispatcher(todoActionCreators.drop(evt.todo));
        return;
      case "PATCH":
        dispatcher(todoActionCreators.patch(evt.todo));
        return;
      case "PUT":
        dispatcher(todoActionCreators.put(evt.todo));
        return;
    }
  };

  return (
    <StoreContext.Provider value={{ todos, setTodos }}>
      <Todos />
    </StoreContext.Provider>
  );
}

// import "./App.css"
// import {UseReducer } from "react"
// const data ={
// books:[],
// electronics:[], } ;
// function reducer ( state, action ) {
// if ( action.type === "ADD_BOOK" ) {
// data.books.push (action.book)
// }
// return {
// books:[...data.books]
// electronics:[...data.electronics]
// }}
// export function App() {

// const [store,dispatcher] = UseReducer (reducer,data)
// console.log("RENDER")
// // return (
// 	<>

// 	<h1>
// 		A
// 	</h1>
// <button onClick ={ ()=>dispatcher({
// type:"ADD_BOOK",
// book:{
// name: Math.random()})}
// >Add new book </button>
// 	{books.map ((book )=>p key = {book.name}>{book.name}</p)}
// 	<h1>Electronics</h1>
// 	{store.electronics.map ((v, i )=>p key = {i}>{v},</p)}
//  // <button onClick ={ ()=>dispatcher({
// type:"ADD_ELECTRONICS",
// electronics:{
// name: Math.random()})}
// >Add new electronics </button>
// 	{electronics.map ((electronics )=>p key = {electronics.name}>{electronics.name}</p)}
// 	</>
// )
// }
