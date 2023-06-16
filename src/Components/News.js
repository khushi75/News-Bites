import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.title =`${capitalizeFirstLetter(props.catagory)} - News Bites`;

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setLoading(false)
    setTotalResults(parseData.totalResults)

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };
  
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop: '75px'}}>Top {capitalizeFirstLetter(props.catagory) } Headlines</h1>
        {loading && <Spinner />}

      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row">
        {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
         
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  catagory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catagory: PropTypes.string,
};
export default News;
