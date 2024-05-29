import './product.css'

function Product(props){
    return(
        <div className="product">
           <div className='pro-img'>
            <img className='image' src={props.imgurl} />
        </div>
        <div className='details'>
            <h1>{props.name}</h1>
            <h2>&#8377;{props.price}</h2>
        </div>
        </div>

         
            
         
        
        
    
        
    )
}

export default Product