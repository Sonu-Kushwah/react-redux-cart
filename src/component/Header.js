import React,{useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { DLT } from '../Redux/Actoins/action';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
const Header = () =>{
  const [price, setPrice] = useState();
  //console.log(price);

  const getData = useSelector((state)=> state.cartReducer.carts);
  console.log(getData);

  const dispatch = useDispatch()
  const dlt = (id) =>{
    dispatch(DLT(id))
  }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const totle = () => {
      let price = 0;
      getData.map((elem)=>{
        price = elem.price * elem.qnty + price;
      })
       setPrice(price)
    }
    useEffect(()=>{
      totle()
    },[totle])
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className='text-light mx-3 text-decoration-none'>
          Add To Cart</NavLink>
          <Nav className="me-auto">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/Contact" className="nav-link" >Contact</Link>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"  id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <i class="fa-solid fa-cart-shopping text-light" 
          style={{fontSize:25,cursor:"Pointer"}}></i>
        </Badge>
          
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {
        getData.length ?
        <div className='card-details' style={{width:"24rem", padding:10}}>
        <Table>
        <thead>
        <tr>
        <th>photo</th>
        <th>Reatorent Name</th>
        
        </tr>
        </thead>
        <tbody>
        {
          getData.map((elem, index)=>{
            return(
              <>
              <tr>
              <td>
              <NavLink to={`/Cart/${elem.id}` } onClick={handleClose}>
              <img src={elem.imgdata} style={{width:"5rem", height:"5rem"}} />
              </NavLink>
              </td> 
              <p>{elem.rname}</p>
              <p>Price:₹{elem.price}</p>
              <p>quntity :{elem.qnty}</p>
              <p><strong></strong><i className='fas fa-trash smalltrash' 
              onClick={()=>dlt(elem.id)} style={{color:"red", cursor:"pointer"}}></i>
              </p>
              <td><strong>Remove:</strong><i className='fas fa-trash' 
              onClick={()=>dlt(elem.id)} style={{color:"yellow", cursor:"pointer"}}></i></td>
              </tr>
              </>
            )
          })
        }
        <p text-center>totle:{price}</p>
        </tbody>

        </Table>
        </div>: <div className='card-details d-flex justify-content-center align-item-center' 
        style={{width:"25rem", padding:10, position:"relative"}}>
        <i className='fas fa-close smallclose' 
        onClick={handleClose}
        style={{position:"absolute", top:2, right:10, fontSize:23,cursor:"pointer" }} >
        </i>
        <p style={{fontSize:22}}>your Cart is empety</p>
        <img src="./cart.gif" alt="" className='empetycart-img' style={{width:"5rem", padding:10}}/>
        </div>
      }

      
      </Menu>
      </Navbar>
        </>
        
    )
}
export default Header;
