import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcomingMovies/Upcoming'
import NowPlayingMovies from './nowPlaying/NowPlaying'
import AiringToday from './airingTodayTV/AiringToday'

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner></HeroBanner>
        <Trending></Trending>
        <Popular></Popular>
        <TopRated></TopRated>
        <Upcoming></Upcoming>
        <NowPlayingMovies></NowPlayingMovies>
        <AiringToday></AiringToday>
        
    </div>
  )
}

export default Home