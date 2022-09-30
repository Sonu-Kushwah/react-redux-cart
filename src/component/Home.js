import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardsData from './CardsData.js';
import ADD from '../Redux/Actoins/action';
//import "./style.css"
const Home = () =>{
    const [data,SetData] = useState(CardsData);
    //console.log(data);
    const dispatch = useDispatch()
    const send = (e) => {
      //console.log(e)
      dispatch(ADD(e))
    }


    return(
        <div className='container mt-3'>
        <h2 className='text-center'> Add To Card</h2>
        <div className='row d-flex justify-content-center align-items-center'>
        {
            CardsData.map((elem, id)=>{
                return(
                    <>
                    <div className="card mx-2 my-4 card_style" style={{width:"22rem", border:"none"}} >
                    <img src={elem.imgdata} style={{height:"16rem"}}/>
                    <div className="card-body">
                      <h5 className="card-title">{elem.rname}</h5>
                      <p className="card-text">Price:${elem.price}.00</p>
                      <div className='button-div d-flex justify-content-center'>
                      <button  onClick={()=> send(elem)} className="col-lg-12">Add to cart</button>
                
                      </div>
                      
                    </div>
                   </div>
                   
                    </>
                )
            })
        }
 </div>     
 </div>
    );
}
export default Home;