import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let{title,description,imgUrl,newsUrl,date,author,source}=this.props;
    return (
      <div className="container my-3">
        <span className="badge rounded-pill text-bg-danger" style={{zIndex:'1'}}>{source}</span>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
              Read More
            </a>
            <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
          </div>
         
        </div>
      </div>
    );
  }
}
