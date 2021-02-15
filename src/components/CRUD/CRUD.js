import React, { Fragment, useContext, useState } from 'react';
import { BookContext } from '../App/App';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { AiFillRead, AiOutlineEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';


const CRUD = ({ book }) =>{
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  const { deleteBook, updateBook } = useContext(BookContext);

  return(
    <Fragment>
      <Link to = {`/book/${book.id}`}><AiFillRead style ={{color:"purple"}} /></Link>
      <AiOutlineEdit style ={{color:"purple"}} onClick = {() => setIsOpenModal(true)}/>
      <MdDeleteForever style ={{color:"purple"}} onClick = {() => deleteBook(book)}/>
    </Fragment>
  )
}

export default CRUD;
