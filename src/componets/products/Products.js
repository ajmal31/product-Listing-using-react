import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  Header  from '../../componets/Header';
import Data from '../products/productsData';
export const Products = () => {

  const [items,setItem]=useState(Data)

  const decrement=(id)=>{
   
    let newItem = items.map((item)=>{
      
      if(item.id===id && item.qty>1)
      {
         return {...item,qty:item.qty-1}
         

      }else
      {
         
         return item
      }
    })

    setItem(newItem)

  }

  const increment =(id)=>{
    const newItem=items.map((item)=>{

      if(item.id===id)
      {
        return {...item,qty:item.qty+1}
      }else{
        return item
      }
    })

    setItem(newItem)
  }

  return (

    <div>
      
       <Header/>
       
      {items.map((item)=>(
        <div  className='d-inline-flex m-3' key={item.id} >
 <Card style={{ width: '18rem' }} className="shadow-lg p-3 m-2 mb-5 bg-white rounded"   >
  <div className='m-1'  style={{ height: '15rem' }} >
 
 <Card.Img variant="top"  src={require(`../products/smartphones/${item.name}.png`)}  />
 </div>
 <Card.Body>
   <Card.Title>{item.name}</Card.Title>
   <Card.Text>
    {item.description}
   </Card.Text>
   <h4>{item.price}</h4>
   Qty:
   <Button variant="primary" className='m-2' onClick={()=>decrement(item.id)} >-</Button>
  {item.qty} 
   <Button variant="primary" className='m-2'onClick={()=> increment(item.id)} >+</Button>
   <br/>
   <br/>
   <Button variant="primary">Add-to-cart</Button>
 </Card.Body>
</Card>
 </div>
      ))}
      
      

    </div>
  )
}

export default Products;
