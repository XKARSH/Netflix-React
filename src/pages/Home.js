import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Requests";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        rowID='1'
        title='Netflix Originals'
        fetchURL={requests.requestNetflixOriginals}
      />
      <Row rowID='2' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='4' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='5' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='6' title='Action' fetchURL={requests.requestActionMovies} />
      <Row rowID='7' title='Comedy' fetchURL={requests.requestComedyMovies} />
      <Row rowID='8' title='Horror' fetchURL={requests.requestHorrorMovies} />
      <Row rowID='9' title='Romance' fetchURL={requests.requestRomanceMovies} />
      <Row
        rowID='10'
        title='Documantaries'
        fetchURL={requests.requestDocumantaries}
      />
    </>
  );
};

export default Home;
