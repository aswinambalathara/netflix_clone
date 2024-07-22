import { useState } from 'react'
import './App.css'
import {action,documentaries,netflixOriginals,romance,banners} from './constants/urls.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Banner from './Components/Banner/Banner.jsx'
import RowPost from './Components/RowPosts/RowPost.jsx'
function App() {

  return (
    <>
    <Navbar/>
    <Banner url={banners}/>
    <RowPost title='Netflix Orginals' url = {netflixOriginals}/>
    <RowPost title='Action' url={action} isSmall/>
    <RowPost title='Romance' url={romance} isSmall/>
    <RowPost title='Documentaries' url={documentaries} isSmall/>

    </>
  )
}

export default App
