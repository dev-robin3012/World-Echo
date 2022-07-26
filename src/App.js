import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import Layout from "./layout";
import Home from "./pages/Home";

export const QueryContext = createContext();
export const NewsContext = createContext();

function App() {
  const [query, setQuery] = useState({ category: "", pageSize: 10 });
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY3}&page=${
            query.pageSize
          }${query.category && "&q=" + query.category}`
        );
        const news = await res.json();
        setNews(news.results);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        console.log(error);
      }
    })();
  }, [query]);

  return (
    <QueryContext.Provider value={[query, setQuery]}>
      <NewsContext.Provider value={news}>
        <Layout>{isFetching ? <LoadingSpinner /> : <Home />}</Layout>
      </NewsContext.Provider>
    </QueryContext.Provider>
  );
}

export default App;
