import React from 'react'
import './styles/navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const Navbar = ({size,setshow}) => {
  return (
<nav>
 <div className='nav_box'>
        <span className='cart_heading' onClick={()=>setshow(true)}>
        Shopping Cart
        </span>
        <div className='cart' onClick={()=>setshow(false)}>
               <span >
                 <i className='fas fa-cart-plus'></i>
                 </span>
                 <span>
                    {size}
                 </span>
         </div>
        
 </div>
</nav>
  )
}

export default Navbar