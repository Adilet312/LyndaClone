import React,{Fragment,useState} from 'react';
import { Link } from 'react-router-dom';
import MenuModal from './MenuModal/MenuModal';
import Search from './Search/Search';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import './Navigation.css';
const Navigation = () => {
const [isOpen, setIsOpen] = useState(false);
  return(
    <header>
      <GiHamburgerMenu style = {{color:"#fff", position:"absolute", left:"20px",top: "30px",fontSize:"25px"}} onClick = {() => setIsOpen(true)}/>
      {
        isOpen && <MenuModal setIsOpen = {setIsOpen}/>
      }
      <Link to='/'><AiFillHome style = {{color:"#fff",position:"absolute", right: "20px",top:"30px",fontSize:"25px"}}/></Link>
      <Search/>
    </header>
  )
}

export default Navigation;
