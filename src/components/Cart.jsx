import React, { useState,useEffect } from 'react'
import '../styles/cart.css'
const Cart = ({cart,setcart,handleChange}) => {
    const [price,setprice]=useState(0);

    const handleRemove = (id) =>{
        const arr = cart.filter((i) => i.id !== id);
        setcart(arr);
      }
  
      const handlePrice = () => {
        let ans = 0;
        cart.map((i) => {
          ans+= i.amount * i.price;
        })
        setprice(ans)
      }
      
  
      useEffect(() => {
        handlePrice();
      })

  return (
    <article>
      { cart?.map((i) => (
        <div className='cart_box' key ={i.id}>
            <div className='imag_box'>
                <img src={i.img}/>
                <p>{i.title}</p>
            </div>
            <div className='btn'>
            <button onClick={()=>{
                handleChange(i,+1)
            }}>+</button>
            <button  onClick={()=>{
                handleChange(i,-1)
            }}>-</button>
        </div>
        <div>
        <span className='show-price'>Rs {i.price}</span>
        <button className='remove-btn' onClick={() => handleRemove(i.id)}>Remove</button>
      </div>
     </div>
       ))
       }
   <div className='total'>
          <span>Total Price of your Cart  </span>
          <span> Rs - {price}</span>
        </div>
        </article>
  )
}

export default Cart