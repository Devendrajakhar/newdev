import React, { Component } from 'react';

export class NewsItems extends Component {
    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card my-3 position-relative" style={{ width: "18rem" }}>
            <span className="position-absolute badge rounded-pill bg-success" style={{ top: "10px", right: "10px", zIndex: "2" }}>
              {source}
            </span>
            <img 
              src={imageurl || "https://images.macrumors.com/t/BwgXVSeS8z-cmwtblOnMqUi8SY4=/2000x/article-new/2024/07/ios-18-1-writing-tools.jpg"} 
              className="card-img-top" 
              alt="news"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description || "No Description Found For This News"}</p>
              <p className="card-text">
                <small className="text-muted">By {author || "Unknown"} on {date ? new Date(date).toGMTString() : "Unknown"}</small>
              </p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
            </div>
          </div>
          
        );
    }
}

export default NewsItems;
