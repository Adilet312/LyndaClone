import React,{ useState,useEffect,useReducer,Fragment } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import List from '../List/List';
import './App.css';
import Navigation from '../Navigation/Navigation';
import BookDetail from '../BookDetail/BookDetail';
import axios from 'axios';
import {without,findIndex} from 'lodash';
export const BookContext = React.createContext();
const reducer = (state,action) =>{
	switch(action.type){
		case 'BOOKS_FETCH_SUCCESS':
			return {...state, isLoading: false, isError: false, books_data: action.books}
		case 'BOOKS_FETCH_FAILURE':
			return {...state, isLoading: false, isError: true, books_data: action.books}
		case 'SEARCH_BOOKS':
		console.log("search word from reducer: " ,action.search);
			return ({...state, isLoading: false, isError: false, books_data: action.search ? state.books_data.filter(book => book.name.toLowerCase().includes(action.search)):state.books_data})
		case 'REMOVE_BOOK':
		 const tempBooks = without(state.books_data,action.book)
			return {...state, isLoading: false, isError: false, books_data: tempBooks}
		case 'ADD_BOOK':
			return
		case 'UPDATE_BOOK':
			return
		default:
			throw new Error();

	}
}
const App = () =>{
const [books,dispatchBooks] = useReducer(reducer, {
	isLoading: false,
	isError: false,
	books_data: []
});
const [searchTerm, setSearchTerm] = useState('');

/*Get and Set data */
useEffect(() =>{
 axios.get('./bookList.json')
 .then( (response) => {
	 dispatchBooks({
		 type: 'BOOKS_FETCH_SUCCESS',
		 books: response.data
	 })
 })
 .catch( () =>{
	 dispatchBooks({
		 type: 'BOOKS_FETCH_FAILURE'
	 })
 })

},[])
const onSearch = (term_search) =>{

	dispatchBooks({
		type:'SEARCH_BOOKS',
		search:term_search.toLowerCase(),
		books:books
	})
	setSearchTerm(term_search)

}
const deleteBook = (bookForDeletion) =>{
	dispatchBooks({
		type:'REMOVE_BOOK',
		book:bookForDeletion
	})
}
const updateBook = (e) =>{
	e.preventDefault();
	dispatchBooks({
		type:'UPDATE_BOOK',
		book:"Adilet"
	})
}
const {isLoading, isError, books_data} = books;
	return(
		<Router>
				<main>
				    {isError && <h1>Something went wrong . . .</h1>}
          <BookContext.Provider value = {{ books_data, onSearch, searchTerm, deleteBook, updateBook}}>
						<Navigation/>
						<Switch>
						{
						 isLoading?<h1>Loading ...</h1>:<Route  exact path = '/'><List/></Route>
						}
						<Route path = '/book/:id' render = {(props) => {
							let bookId = Number(props.match.params.id);
							return(
								<BookDetail book = {books_data[bookId]}/>
							)
						}}/>
						</Switch>
					</BookContext.Provider>
				</main>
	</Router>
	)
}
export default App;
