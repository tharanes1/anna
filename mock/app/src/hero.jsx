import React, { useEffect, useState } from 'react'
// import TypingEffect from './TypingEffect'



function hero() {
  const text="Your Gateway to Infinite Stories and Endless Knowledge";
  const [displayedText,setDisplayedText]=useState('');
  const [index,setIndex]=useState(0);




  useEffect(()=>{
    let timeout;
    if(index<text.length){
      timeout=setTimeout(()=>{
        setDisplayedText((prev)=>prev+text.charAt(index));
        setIndex(index+1);
      },50);
    }
    
    return ()=>clearTimeout(timeout);
  },[index]);
  return (
<div className='page-content d-flex w-100 animate__animated animate__backInDown'>
    <div className='res'>
    <div className='tes animate__animated animate__hinge animate__delay-3s'>
        welcome to the bookshop
    </div>
    {/* <TypingEffect/> */}
    <div className='tes1'>
        {displayedText}
    </div>
    
    </div>

    <div className='tes2 ms-auto'>
        <img src='./src/assets/Book lover-bro.png'></img>
    </div>
</div>
  )
}

export default hero