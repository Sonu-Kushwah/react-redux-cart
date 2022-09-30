import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { DLT, DEC } from '../Redux/Actoins/action';
import { useDispatch } from 'react-redux';
import ADD from '../Redux/Actoins/action';
const CartDaitels = () =>{
  const {id} = useParams();
  //  console.log(id);

 const [data, setData] = useState([])
 console.log(data);
  const getData = useSelector((state)=> state.cartReducer.carts);
  //console.log(getData);

  const compare = () =>{
    let comparedata = getData.filter((e)=>{
      return e.id == id
    })
    setData(comparedata)
  }
  useEffect(()=>{
    compare();
  },[id])
    const history = useNavigate();
     const dispatch = useDispatch();

     // add data
     const send = (e) => {
      //console.log(e)
      dispatch(ADD(e))
    }
    //add data end

    //decrement
    const decrement = (remove) =>
    dispatch(DEC(remove));
    //decrement end

     const dlt = (id) =>{
      dispatch(DLT(id))
      history("/")
     }

    return(
        <>
      <div className='container mt-2'>
      <h2 className='text-center'>item deatails page</h2>
      <section className='container mt-3'>
      <div className='iteamsdetails'>

      {
        data.map((elem,index)=>{
          return(
            <>
            <div className='items_img'>
        <img src= {elem.imgdata}/>
        </div>
         <div className='details'></div>
         <Table>
         <tr>
         <td>
         <p><strong>Restorent</strong>{elem.rname}</p>
         <p><strong>Price</strong>:₹{elem.price}</p>
         <p><strong>Deshes</strong>:{elem.address}</p>
         <p><strong>Totle</strong>:₹{elem.price*elem.qnty}</p>
         <div className='mt-5 d-flex justify-content-between align-item-center' 
         style={{fontSize:24, cursor:"pointer", width:100}} >
         <span onClick={elem.qnty <=1 ?()=>dlt(elem.id) : ()=>decrement(elem)}>-</span>
         <span>{elem.qnty}</span>
         <span onClick={()=>send(elem)}>+</span>
         </div>
         </td>
         <td>
         <p><strong>Rating</strong> <span style={{background:"green"}}>{elem.rating}★</span></p>
         <p><strong>Order Raviw </strong> <span>{elem.somedata} </span></p>
         <p><strong>Remove:</strong> <span ><i className='fas fa-trash' 
         onClick= {()=>dlt(elem.id)} style={{color:"red", cursor:"pointer"}}></i></span></p>
         </td>
         </tr>
         </Table>
      
            </>
          )
        })
      }
      </div> 
      </section>
      </div>
        </>
    )
}
export default CartDaitels;