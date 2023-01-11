import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import apiKey from './data/config';
import Navinshorts from './components/Navinshorts';
import NewsContent from './components/Newscontent/NewsContent';
import Footer from './components/Footer/Footerinshorts';

function App() {
  const [category, setCategory]= useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] =useState(20);

  const newsApi = async() => {
    
     try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news =  await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
     } catch (error) {
      console.log(error);
     }
  };

  useEffect(() =>{
   newsApi();
  },[newsResults,category,loadmore])
  return (
    <div className='App'>
    <Navinshorts setCategory={setCategory}/>
    <NewsContent
     newsArray={newsArray} 
     newsResults={newsResults}
     loadmore={loadmore}
     setLoadmore={setLoadmore}
     />
    <Footer/>
    </div>
  );
}

export default App;
