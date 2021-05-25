import React, {useState, useEffect} from 'react';
import axios from './axios.js';
import './Row.css';
function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setmovies] = useState([]);              //base url for images from tmd(image)
  //const base_url = 'https://image.tmdb.org/t/p/original/';     
  
 const base_url='https://image.tmdb.org/t/p/original/';                 
    
useEffect(()=>
{
    async function fetchData () {
const request = await axios.get(fetchUrl);   
setmovies(request.data.results);
console.log(request);
 return request;                          //  fetch url contains the back url
     
    }
    fetchData();
},[fetchUrl]);



    return (
        <div className='row'>             
              <h1>{title}</h1>  
                                                                     
<div className='row_posters'>

 {movies.map((movie)=>(
  <img className= {`row_image ${isLargeRow && 'row_posterlarge'}`}                                           //to do any changes in image we need to apply css in image tag
  key={movie.id}
  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title} />
                                                                                        //poster psth contains the path of imae
                                                                                        //and the alternate name is original_title as it is comman in all
 )
 
 
 )
}
</div>

        </div>
    )
}

export default Row;
