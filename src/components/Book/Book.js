import React,{Fragment} from 'react';
import './Book.css';
const Book = ({name,image}) =>{
  return(
    <Fragment>
        <img src = {`${image}`} className = 'image'/>
        <h3 className = 'name'>{name}</h3>
    </Fragment>
  )
}
export default Book;
