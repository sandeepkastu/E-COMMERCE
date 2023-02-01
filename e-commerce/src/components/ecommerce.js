 
import React,{useState} from 'react';


export default function Ecommerce() {

    const [electronics,setElectronics]=useState([])
    const [women,setWomen]=useState([])
    const [men,setMen]=useState([])

    const Type=(option)=>{


        
        if(option==='Electronics') Electronics();
        else if(option==='Womenwear') BeautyProducts();
        else if(option==='Menwear') Menwear();
    }
    
   
    const Electronics=async()=>{
        setWomen([]);
        setMen([]);
    await fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((response) => {setElectronics(response.products)
        })
        .catch(err => console.error(err));


}
    const BeautyProducts=async()=>{

        setElectronics([]);
        setMen([]);
    await fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(response => setWomen(response.products))
        .catch(err => console.error(err));
}
    const Menwear=async()=>{
        setElectronics([]);
        setWomen([])
    await fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(response => setMen(response.products[12].images))
        .catch(err => console.error(err));
}
  return (
    <div>
     <h1>Available Products</h1>
     <select  onChange={(e)=>{Type(e.target.value)}} style={{float:'left'}}>
       <option>Select</option>
       <option>Electronics</option>
       <option>Womenwear</option>
       <option>Menwear</option>
       
     </select>
      <br/>

     {electronics.map((info,i)=>(<span key={info.id}><img  src={info.images[i]} alt='product_image' height='100px' width='150px' />
                           <p>{info.title}</p></span>))}:
    
    {women.map((info,i)=>(<span key={info.id}><img  src={info.images[i+2]} alt='product_image' height='100px' width='150px' />
    <p>Price:{info.price}</p></span>))}
    {men.map((images,i)=>(<span  key={i}><img class='men' src={images} alt='product_image' height='100px' width='150px' />
    </span>))}
      
    </div>
  )
}
