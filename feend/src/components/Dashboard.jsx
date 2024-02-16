import React,{useEffect, useState, useMemo} from 'react'
import axios from 'axios'

function Dashboard() {
    const token=JSON.parse(localStorage.getItem('token'))
    const [password,setPassword]=useState('xxxxx')
    const [value,setValue]=useState(null);
    const [image,setImage]=useState(null);
    const [uploaded,setUploaded]=useState(null)
    const [imageUrls,setImageUrls]=useState([]);

    const doubleNumber=useMemo(()=>{return (()=>{
        for(let i=0;i<1000000000;i++){}
        console.log(value)
        return 2*value;
    })()},[value]);

    const handleShowPassword=async(e)=>{
        try {
            const response= await axios.get('http://localhost:5006/api/password', {headers:{
                 "Content-Type":'application/json',
                 "Authorization":`Bearer ${token.token}`
            }});
            setPassword(response.data.password);
        } catch (error) {
            alert(error);
            if(error.response.status===403){
                localStorage.clear();
                window.location.href='/login'
            }
        } 
    }
    useEffect(()=>{
        if(!token){
            window.location.href='/login'
        }
    },[token])

    const handleUpload=(e)=>{
        const file=e.target.files[0];
        setImage(file)
    }

    const upload=async ()=>{
        try {
            if(image){
                const formData = new FormData();
                formData.append('image', image);
    
                const response = await axios.post('http://localhost:5006/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setUploaded(response.data.file)
                console.log(response.data); 
            }else{
                alert('No image to uplaod');
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        const fetchImages = async () => {
            try {
              const response = await axios.get('http://localhost:5006/api/images');
              console.log(response)
              setImageUrls(response.data.files);
            } catch (error) {
              console.error('Error fetching images:', error);
            }
    }
    fetchImages();
},[]);

  return (
    <div className='flex flex-col inline-block justify-center h-screen items-center'>
    <div className='flex justify-center items-center'>
        <div>
            <img className='h-16 w-20 rounded-xl mr-4' src='https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg' alt='profile Pic'/>
        </div>
    <div>
        <button onClick={handleShowPassword}>Show Password</button>
        <div>{password}</div>
        <div className="doubleNo">
        <input type='number' placeholder='Input Number' onChange={(e)=>setValue(parseInt(e.target.value))} className='border border-1 border-red-500'/>
    {doubleNumber}
        </div>
    </div>
    </div>
    <div>
            <input className='border border-2 border-green-500' type="file" name='image' onChange={handleUpload}/>
            <button  className='border border-2 border-green-600 bg-red-300' onClick={upload}>Submit</button>
        </div>
    <div>
    <div>Image List</div>
    {(image)?<img className='h-16 w-20 rounded-xl mr-4' src={URL.createObjectURL(image)} alt="images"/>:''}
    <div>
    b{(uploaded)?<img className='h-16 w-20 rounded-xl mr-4' src={`http://localhost:5006/${uploaded}`} alt="uploaded"/>:''}
    </div>
    <div className='flex'>
      {imageUrls?.map((url, index) => (
        <img className='h-24 w-24' key={index} src={`http://localhost:5006/${url}`} alt={`Images ${index}`} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Dashboard