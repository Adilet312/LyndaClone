import React,{useState, Fragment,useContext} from 'react';
import { Link } from 'react-router-dom';
import {BookContext} from '../../App/App';
import './MenuModal.css';
const styleList = {
  color:"black",
  textDecoration: "none"

}
const MenuModal = ({setIsOpen}) =>{
const {books_data} = useContext(BookContext);

  return(
    <Fragment>
      <section className = 'overlay' onClick = {() => setIsOpen(false)}>
        <span onClick = {() => setIsOpen(false)}>X</span>
        <ul className = 'menu'>
          {
            books_data.map( book => <li><Link style = {styleList} to = {`/book/${book.id}`}>{book.created_by}</Link></li>)
          }
        </ul>
      </section>
   </Fragment>
  )
}
export default MenuModal;
