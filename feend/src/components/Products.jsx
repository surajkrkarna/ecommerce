import React,{ useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [product,setProduct]=useState([]);
    const [initial,setInitial]=useState(0);

const suffle=(sarr)=>{
    setInitial(1);
    // const imglen=sarr[initial].length;
    // for(let i=0;i<imglen;i++){
    //     const childImg=sarr[initial][i]
    // }
}

useEffect(()=>{
    const fetchImgae= async ()=>{
        const response=await axios.get('http://localhost:5006/api/products');
        setProduct(response.data.products);
}
fetchImgae();
},[])

  return (
    <div className='grid grid-cols-5 bg-gray-300'> 
       { product.map(pro=>([pro.thumbnail,pro.images,pro.description])).map((ele)=>(
        <>
        <div className='col-span-1'></div>
        <div className='col-span-4'>
        <div className="flex">
        <div className='relative bg-blue-100 p-1'>
        <div className='absolute bottom-0 right-1'><button className='bg-green-900 opacity-80 h-5 w-5 hover:bg-green-500 text-white font-bold' onClick={(ele)=>suffle(ele)}>&rarr;</button></div>
        <div className='absolute bottom-0 left-1'><button className='bg-green-900 opacity-70 h-5 w-5 hover:bg-green-500 text-white font-bold'>&larr;</button></div>
        <img className='h-40 w-96' src={(initial===0)?ele[initial]:ele[initial][0]} alt="Product Images"/>
        </div>
       <div className='w-96'>{ele[2]}</div>
       </div>
       </div>
       </>
       ))}
    </div>
  )
}

export default Product