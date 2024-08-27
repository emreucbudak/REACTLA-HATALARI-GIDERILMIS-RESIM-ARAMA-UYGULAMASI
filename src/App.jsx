import './App.css'
import Header from './Header'
import axios from 'axios'
import './index.css'
import AddImage from './AddImage'
import { useState } from 'react'
import ListImage from './ListImage'


function App() {
  const [imgArray, setImgArray] = useState([])
  const imgSearch = async (name) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID yTWU1o6dQqCd3Yw5UH7Ck4Pi77T-p_rFm4srl_D4MEQ'
      },
      params: {
        query: name
      }
    })
    const cevap = response.data.results;
    const created = [
      ...imgArray, {
        cevap,
      }
    ]
    setImgArray(created);
  }
  return (
    <>
      <Header />
      <AddImage searchImage={imgSearch} />
      <ListImage imgList={imgArray} />

    </>
  )
}

export default App