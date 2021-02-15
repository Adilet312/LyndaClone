import React, {Fragment,useContext} from 'react';
import CRUD from '../CRUD/CRUD.js'
import Book from '../Book/Book';
import {BookContext} from '../App/App';
import './List.css';
const style = {position:"absolute",right:"10px",top:"85%",display:"flex",flexDirection:"row",justifyContent:"space-between",width:"50px"}
const List = () => {
  const { books_data } = useContext(BookContext);
  console.log("data from list: ",books_data);
  return(
    <ul>
      {
        books_data.map( book => <li><Book name = {book.name} image = {book.image}/><div  style = {style}><CRUD book = {book}/></div></li>)
      }
    </ul>

  )
}
export default List;
