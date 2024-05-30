// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   let [name, setName]=useState("akriti")
//   let [age, setAge] = useState(18)


//   useEffect(()=>{
//     console.log("first useeffect")
//   },[])
  
//   useEffect(()=>{
//     console.log("second useeffect")
//   },[age])
  

//   return (
//     <>
//       <hi> welcome  {name}</hi>
//       <button onClick={()=>{
//         setName("aleena")
//       }}>change name</button>

// <button onClick={()=>{
//         setAge("18")
//       }}>change age</button>
     
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react'

// function Items() {
//     let [items,setitem]=useState(["Item 1","Item 2","Item 3"])
//   return (
//       <>
       
//       <button onClick={()=>{
//         let copyItems=[...items]
//         copyItems.push("Item 4")
//         setitem(copyItems)
//       }}>ADD ITEMS</button>

//        {
//           items.map((e)=>{return <h1>{e}</h1>})
//        }
//       </>
//   )
// }

// export default Items

import React, { useEffect, useState } from 'react'
function app(){
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users",{

    })
    .then((Response)=>{
      return Response.json()
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
}
