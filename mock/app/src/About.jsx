import React, { useEffect, useState } from 'react'

function About() {
  const text=`Founded in 1950, our journey began with a simple passion to connect 
  people with the stories that shape them. What started as a small local store has grown into acommunity of readers across india, both offline and online
  Over the years, we've built more than shelves — we’ve built relationships. 
            We take pride in offering a curated selection of titles that cater to every age, taste, and interest.`;
  const [displayedText,setDisplayedText]=useState('');
  const [index,setIndex]=useState(0);

  useEffect(()=>{
    let timeout;
    if(index<text.length){
      timeout=setTimeout(()=>{
        setDisplayedText((prev)=>prev+text.charAt(index));
        setIndex(index+1);
      },10);
    }
    
    return()=>clearTimeout(timeout);
  },[index]);
  return (
    <div className='yes page-content w-100'>
      <div className='yes4 d-flex'>
        <div>
        <div className='yes1'>
          Our Story
        </div>
        <div className='yes2'>
          <p>{displayedText}</p>
          
        </div>
        </div>
        <div className='yes3'>
          <img src="\src\assets\Milestones of business projects-pana.png"></img>
        </div>
      </div>
    </div>
  )
}

export default About