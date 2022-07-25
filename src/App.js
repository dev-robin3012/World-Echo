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
    setIsFetching(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${query.category}&pageSize=${query.pageSize}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
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
