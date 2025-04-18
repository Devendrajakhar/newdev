import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';


export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Alex Heath",
      "title": "Zuckerberg tells court he made WhatsApp, Instagram better",
      "description": "Towards the end of Mark Zuckerbergâs testimony in a Washington, DC courthouse, a smile flashed across his face.  Metaâs lead attorney, Mark Hansen, had asked the CEO if he was âhappyâ about paying $19 billion for WhatsApp in 2014. Zuckerberg flashed a…",
      "url": "https://www.theverge.com/policy/650360/mark-zuckerberg-defends-instagram-whatsapp-ftc-meta-antitrust-trial",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/04/STKS507_FTCxMETA_ANTITRUST_CVIRGINIA_2_A.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-04-17T00:50:18Z",
      "content": "During the FTC v. Meta trial, CEO Mark Zuckerberg challenged the governments argument that he bought both apps to snuff them out.\r\nTowards the end of Mark Zuckerbergs testimony in a Washington, DC co… [+4556 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "bradypsnyder@gmail.com (Brady Snyder)",
      "title": "Android users just dodged a bullet as the CVE cybersecurity tracker stays funded",
      "description": "You may not know it, but if you have an internet-connected device, you have the CVE program to thank for device security. We all almost lost it.",
      "url": "https://www.androidcentral.com/apps-software/android-os/android-users-just-dodged-a-bullet-as-the-cve-cybersecurity-tracker-stays-funded",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/DsBa2t3vEyHabPemsFwwK8.jpg",
      "publishedAt": "2025-04-17T00:38:15Z",
      "content": "Most users of technology don't have to consciously think about security vulnerabilities on their most-used devices, including Android-based products, very often. As long as you update your phone as s… [+5597 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Intelligence Not Available in Meta Apps Like Facebook, Instagram",
      "description": "Apple has seemingly had one of its most useful AI tools blocked from Meta's apps. Writing Tools, which is an Apple Intelligence feature, is not available to use in Facebook, WhatsApp, Instagram, Threads, and Messenger.\n\n\n\n\n\nApple's Writing Tools include optio…",
      "url": "https://www.macrumors.com/2025/04/17/apple-intelligence-not-available-in-meta-apps/",
      "urlToImage": "https://images.macrumors.com/t/BwgXVSeS8z-cmwtblOnMqUi8SY4=/2000x/article-new/2024/07/ios-18-1-writing-tools.jpg",
      "publishedAt": "2025-04-17T10:26:29Z",
      "content": "Apple has seemingly had one of its most useful AI tools blocked from Meta's apps. Writing Tools, which is an Apple Intelligence feature, is not available to use in Facebook, WhatsApp, Instagram, Thre… [+1104 chars]"
    },
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page :1

    }
  }

  async componentDidMount() {
   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d144c972e0c247249f10d97c8adfb4cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalresults: parsedData.totalResults, loading: false  });

  }
  handlenextclick = async () => {
  if(this.state.page+1>Math.ceil(this.state.totalresults/this.props.pageSize)){
   return;
  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d144c972e0c247249f10d97c8adfb4cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    })
    console.log("click next")
  }
  }
  handlepreviouclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d144c972e0c247249f10d97c8adfb4cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
    console.log("click prec")
  }
  render() {
    return (
      <div className="container">
        <h2 className='text-center' >New - Top Headlines</h2>
       
        <div className="text-center">{this.state.loading&&<Spinner/>}</div>
        
        <div className='row'>
          {Array.isArray(this.state.articles)&&this.state.articles.map((element) => {
            return (
              <div className="col-md-3 mt-2" key={element.url}>
                <NewsItems title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} />
              </div>)
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mt-2 mb-2" onClick={this.handlepreviouclick}> &larr; previous</button>
          <button type="button" className="btn btn-dark  mt-2 mb-2" onClick={this.handlenextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalresults / this.props.pageSize)}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
