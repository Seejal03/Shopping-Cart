import React from 'react'
import list from '../list'
import Card from './Card'
const Shopping = ({handleclick}) => {
    return (
        <div>
         <section>
            {
                list.map((item)=>(
                    <Card i={item} key={item.id} handleclick={handleclick}/>
                ))
            }
            </section>
        </div>
      )
}

export default Shopping