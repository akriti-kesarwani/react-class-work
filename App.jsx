
import './App.css'
import Product from './product'
function App() {
  let name = "akriti kesarwani"

  function dosomething()
  {
    console.log("i'm clicked")
  }

  function printName(name, age)
  {
    console.log(name)
  }

  return(
    <div>
    <h1>welcome to react {name}</h1>

    <button className='btn' onClick={dosomething}>click</button>

    <button className='btn' onClick={printName.bind(this,"akriti", 18)}>print Name</button>

    <button className='btn' onClick={()=>{printName('sanskriti', 26)}}>new method</button>



    <Product
     name= "samsung A22"
    imgurl='https://images.jdmagicbox.com/quickquotes/images_main/galaxy-a22-5g-ram-8-gb-128-gb-green-240390968-vk2e25ji.jpg'
    price="34000"/>

    <Product
     name= "samsung A22"
    imgurl='https://images.samsung.com/in/smartphones/galaxy-z-flip4/images/galaxy-z-flip4_highlights_kv.jpg'
    price="84000"/>
    </div>



  )
  
  
  
}

export default App
