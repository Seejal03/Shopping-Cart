import React from 'react'
import '../styles/card.css'

const Card = ({i, handleclick}) => {

    const {title,author,price,img} = i;
  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt='image'/>
      </div>
      <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p> Price -  {price}Rs</p>
        <button onClick={()=> handleclick(i)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card