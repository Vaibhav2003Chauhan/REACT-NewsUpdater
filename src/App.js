import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Card from './Component/Card';
import { useEffect, useState } from 'react';

function App() {

  const [news_articles, set_news_articles] = useState([]);
  const [heading, set_heading] = useState("Wildlife")

  useEffect(()=>
  {
    fetch_news()
  },[])

  function fetch_news(news_type) {

    let url;
    if (news_type == undefined) {
      url = `https://newsapi.org/v2/everything?q=wildlife&from=2024-10-25&sortBy=publishedAt&apiKey=3360e63138474f2aa02a45590dd1d346`;
    }

    else {
      url = `https://newsapi.org/v2/top-headlines?category=${news_type}&language=en&apiKey=3360e63138474f2aa02a45590dd1d346`;
      set_heading(news_type.toUpperCase());
    }
    console.log(news_type + "This is the user choice ")

    fetch(url).then((res) => res.json()).
      then((res) => {
        console.log(res)
        set_news_articles(res.articles  || []);
      })
    get_news(url)
  }

  function get_news() {

  }

  const news = news_articles.map((curr, index) => {
    return <Card curr={curr} key={index} index={index} />
  })

  return (
    <>
      <Header fetch_news={fetch_news} />

      <h1 className="mb-4 text-xl font-extrabold text-white text-center md:text-5xl lg:text-6xl dark:text-white">{heading}</h1>

      <div className="container p-3 flex flex-wrap items-center justify-around">

        {news}

      </div>

      <Footer />
    </>
  );
}

export default App;
