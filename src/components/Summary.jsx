import React, { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';

const API_URL = 'https://api.tvmaze.com/lookup/shows?thetvdb=';

const Summary = () => {
  const navigate = useNavigate();
  const { thetvdb } = useParams();
  const [data, setData] = useState({});
  function stripHtml(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  useEffect(() => {
    fetch(API_URL + thetvdb)
      .then((result) => result.json())
      .then((data) => setData(data));
  }, [thetvdb]);
console.log(data)
  return (
    <div className='summary'>
      <div className='app'>
        {data.name ?<h1>{data.name}</h1>:<p>loading</p>}
      </div>
      <div className='content'> 
      {data.image ? <img src={data.image.medium} alt={data.name} /> : <p>Loading...</p>}

      <div className='written'>
      <div className='runtime'>
        Runtime - {data.runtime} hrs
      </div>
      <div className='story'>
      {stripHtml(data.summary)}
      </div></div></div>  
      
     <div className='submit'>
     <button onClick={()=>{navigate(`${data.externals.thetvdb}`)}}>
      Book Show
     </button>
    </div>
    </div>

  );
};

export default Summary;
