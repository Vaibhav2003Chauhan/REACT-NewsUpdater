import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Card from './Component/Card';
import Tooltip from './Component/Tooltip';
import { useEffect, useState } from 'react';

function App() {

  const [news_articles, set_news_articles] = useState([]);
  const [heading, set_heading] = useState("Wildlife");
  const [display_tooltip, set_display_tooltip] = useState(false);
  const [tooltip_data, set_tooltip_data] = useState({})

  useEffect(() => {
    fetch_news()
  }, [])

  function fetch_news(news_type) {

    let url;
    if (news_type == undefined) {
      url = `https://newsapi.org/v2/everything?q=wildlife&from=2024-11-04&sortBy=publishedAt&apiKey=6b7ddd9c75aa43069cf3e8ccfc597b8c`;
    }

    else {
      url = `https://newsapi.org/v2/top-headlines?category=${news_type}&language=en&apiKey=6b7ddd9c75aa43069cf3e8ccfc597b8c`;
      set_heading(news_type.toUpperCase());
    }
    console.log(news_type + "This is the user choice ")

    fetch(url).then((res) => res.json()).
      then((res) => {
        console.log(res)
        set_news_articles(res.articles || []);
      })
    get_news(url)
  }

  function get_news() {

  }

  const news = news_articles.map((curr, index) => {
    return <Card curr={curr} key={index} index={index} show_tooltip={show_tooltip} />
  })

  function show_tooltip(index) {
    set_tooltip_data(news_articles[index]);
    set_display_tooltip(true);
  }

  function onClose() {

    set_display_tooltip(false);
  }
  return (
    <>
      <Header fetch_news={fetch_news} />

      <h1 className="mb-4 text-xl font-extrabold text-white text-center md:text-5xl lg:text-6xl dark:text-white">{heading}</h1>

      <div className="container p-3 flex flex-wrap items-center justify-center gap-4">
        {news.length > 0 ? news : <h2 className='text-white font-bold text-2xl'>We do not have News for your request</h2>}
      </div>

      <Footer />


      {display_tooltip && (
        <Tooltip data={tooltip_data} onClose={onClose} />
      )}
    </>
  );
}

export default App;
