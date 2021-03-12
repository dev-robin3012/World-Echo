import React, { useEffect, useState } from 'react';
import News from './News/News';
import '../../App.css';
import LoadingSpinner from './LoadingSpinner';

const Body = () => {
    const [article, setArticle] = useState(null)

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=346c7bdd368b4b0fb5724669204c3d81")
            .then(res => res.json())
            .then(data => setArticle(data.articles))
    }, [])

    return (
        <div className="body">
            {/* <h1 className="text-center">Top Headline : {article.length}</h1> */}
            {
                article === null ? <LoadingSpinner />
                    : article.map(item => <News article={item} />)
            }
        </div>
    );
};

export default Body;