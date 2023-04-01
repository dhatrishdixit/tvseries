import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingForm from './BookingForm';

const API_URL = 'https://api.tvmaze.com/lookup/shows?thetvdb=';


const FormSubmit = () => {
    const { thetvdb } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        fetch(API_URL + thetvdb)
          .then((result) => result.json())
          .then((data) => setMovie(data));
      }, [thetvdb]);
  return (<div className='last'>
    <div className='app'><h1>Form Registration</h1></div>
    <BookingForm movie={movie} />
    </div>
  )
}

export default FormSubmit