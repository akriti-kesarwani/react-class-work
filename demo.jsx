import React, { useState } from 'react'

function Items() {
    let [items,setitem]=useState(["Item 1","Item 2","Item 3"])
  return (
      <>
       
      <button onClick={()=>{
        let copyItems=[...items]
        copyItems.push("Item 4")
        setitem(copyItems)
      }}>ADD ITEMS</button>

       {
          items.map((e)=>{return <h1>{e}</h1>})
       }
      </>
  )
}

export default Items