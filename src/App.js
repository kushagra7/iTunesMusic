import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './styles/styles.css';
import NavBarSearch from './components/NavBarSearch'
import SongGrid from './components/songGrid'

const App = () => {
  //2 things albums, setAlbums is a function that we use to manipulate the state.
  const [albums, setAlbums] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
      )
      console.log(result.data.feed.entry)
      setAlbums(result.data.feed.entry)
      setIsLoading(false)
    }
    fetchData()
  }, []);

  //we are taking our global state and pass into songgrid staet as a prop 
  return (
    <div>
      <NavBarSearch />
      <SongGrid isLoading={isLoading} albums={albums} />
    </div>
  )
}

export default App
