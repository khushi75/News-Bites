import React from "react";

const NewsItem =(props) => {
  
    let { title, discription, imageUrl, newsUrl, author, date } = props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107253205-1686219136123-gettyimages-1252192389-GERMANY_ECONOMY.jpeg?v=1686225764&w=1920&h=1080"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
