import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NewsContext, QueryContext } from "../App";
import HighLightNews from "../components/HighLightNews";
import SingleNews from "../components/SingleNews";

const Home = () => {
  const [query, setQuery] = useContext(QueryContext);
  const news = useContext(NewsContext);

  return (
    <div className="px-md-5 pt-md-3">
      {news.length ? (
        <>
          <HighLightNews news={news?.slice(0, 3)} />

          <div className="my-2 text-center">
            <img src="/addvertise.jpg" alt="" className="addvertise m-auto" />
          </div>

          <div className="border-bottom border-top">
            {news.length &&
              news
                .slice(3, news.length)
                .map((item, key) => <SingleNews article={item} key={key} />)}
          </div>

          <div className="my-3 text-center">
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => setQuery({ ...query, pageSize: query.pageSize + 5 })}
            >
              Load More
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <img src="/No-news.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Home;
