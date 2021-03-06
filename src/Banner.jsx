import axios from './axios';
import React, { useState, useEffect } from 'react';
import requests from './requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]); //[..., ..., ...,]

      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      {/* Background Image */}
      <div className='banner_contents'>
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name || movie?.original_title}</h1>
        {/* title */}
        <button className='first_button'>Play</button>
        <button className='second_button'>My list</button>
        {/* PlayButton */}
        {/* MyListButton */}
        <h1 className='desc_movie'>{movie?.overview}</h1>
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
