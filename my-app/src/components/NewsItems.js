import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title,description,imageurl,newsUrl}=this.props
        return (
            <div>
            <div className="card" style={{width: "18rem"}}>
                    <img src={!imageurl?"https://images.macrumors.com/t/BwgXVSeS8z-cmwtblOnMqUi8SY4=/2000x/article-new/2024/07/ios-18-1-writing-tools.jpg":imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{!description?"No Description Fount For This News":description}</p>
                            <a href={newsUrl}  rel="noreferrer"  target="_blank" className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
