import Card from "../card/Card";
import "./news.scss";
const News = ({ articles }) => {
  return (
    <>
      {articles.map((news) => (
        <Card
          key={news.url}
          title={news.title}
          desc={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </>
  );
};
export default News;
