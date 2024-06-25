import { useEffect, useState } from "react";
import "./newsboard.scss";
import News from "../news/News";
const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7aeb3ee9f0ce4d0ba52cd5bb862f5523`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div className="newsBoardContainer">
      <h1 className="headlineCSS">
        Latest <span className="badge bg-danger">News</span>
      </h1>
      <div className="newsContainer">
        <News articles={articles} />
      </div>
    </div>
  );
};
export default Newsboard;
