
import Navbar from './Navbar';
import React, { useState } from 'react';
import Shopping from './components/Shopping';
import Cart from './components/Cart';
import './App.css';
function App() {
  const [cart,setcart]=useState([]);
  const [warning,setwarning]=useState(false);
  const [show,setshow]=useState(true)
  const handleclick=(i)=>{
    let isPresent = false;
    cart.forEach((product) =>{
      if(i.id === product.id)
      isPresent= true;
    })

    if(isPresent){
      setwarning(true);
      setTimeout(()=>{
        setwarning(false);
      },2000);
      return;
    }
    setcart([...cart,i]);
  }
  const handleChange = (item,d) => {
    let ind = -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;
    console.log(tempArr);

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1;
      
    }
    setcart([...tempArr])
  }
  return (
    <>
     <Navbar size={cart.length} setshow={setshow}/>
     {
      show ?  <Shopping handleclick={handleclick}/> : <Cart cart={cart} setcart={setcart} handleChange={handleChange}/>
     }

       {
        warning && <div className='warning'> Item is already in your cart </div>
      }
    </>
  );
}

export default App;

