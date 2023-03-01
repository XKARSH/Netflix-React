import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "./Banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <h1 className='banner_description'>
            {truncate(movie?.overview, 150)}
          </h1>
          <div className='my-4 banner_buttons'>
            <button className='banner_button_play'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
        </div>
      </div>

      <div className='banner--fadeBottom' />
    </div>
  );
};

export default Banner;
