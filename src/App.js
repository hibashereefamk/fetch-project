

import React, { useState,useEffect } from 'react';
function Fetch(){
    const [quotes,setQuestes]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(response=>response.json())
        .then(data=>{
            setQuestes(data.quotes.slice(0,10));
        })
        .catch(err=>console.err('error fetching quotes:',err));
    },[]);




    return(
        <div className='container'>{quotes.map((quoteObj, index) => (
        <h4 key={index}>{quoteObj.id+":"+quoteObj.quote}</h4>
      ))}</div>


    );

}
export default Fetch;

