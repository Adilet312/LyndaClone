import React,{Fragment} from 'react';
import './BookDetail.css';
const BookDetail = ({book:{name,image,description,created_by}}) =>{
  return(
    <Fragment>
    <section className = 'bookDetailContainer'>
        <h3 className = 'name'>{name}</h3>
        <img src = {`${image}`} className = 'image'/>
        <h3 className = 'name'>{created_by}</h3>
        <p className = 'name'>{description  }</p>
   </section>
    </Fragment>
  )
}
export default BookDetail;
