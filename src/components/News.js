import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:6,
    category:'general',
    
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Sara Fischer, Yacob Reyes",
      title: 'NBC readies "once in a lifetime" sports double header',
      description:
        'Screening 2 events simultaneously amid pandemic will create "operational challenges" but advantages worth it, NBC says.',
      url: "https://www.axios.com/nbc-super-bowl-winter-olympics-dual-broadcasts-7a8a4005-dde8-4608-aab5-50e4af1f4602.html",
      urlToImage:
        "https://images.axios.com/pwi5gIkoJhgy3_Ju4TJ0Z87DGLk=/30x0:1452x800/1366x768/2022/01/20/1642638081230.png",
      publishedAt: "2022-01-20T10:31:11Z",
      content:
        "The overlap between Super Bowl LVI and the 2022 Winter Olympics in a few weeks will be a historic sports moment for sports fans and NBC, which has the broadcast rights for both marquee events this ye… [+3207 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: null,
      title:
        "NBC won't send sports announcing teams to 2022 Winter Olympics in Beijing due to COVID-19",
      description:
        "NBC's broadcasting teams for figure skating, Alpine skiing and snowboarding had been expected to be in Beijing.",
      url: "https://www.usatoday.com/story/sports/olympics/2022/01/19/winter-olympics-2022-nbc-tv-beijing-covid-19/6585943001/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/0c6e58363b77c538450cfddb67747d2e9b6ceb00/c=0-364-7000-4302/local/-/media/2022/01/19/USATODAY/usatsports/0466d7b517394619a0237af9753c912c.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2022-01-20T04:33:42+00:00",
      content:
        "As the 2022 Beijing Winter Olympic Games approach and COVID-19 concerns mount, NBC Sports will not send any of its announcing teams to China, a spokesperson told USA TODAY Sports Wednesday afternoon.… [+3534 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: null,
      title: " New Gridiron Heights",
      description:
        "Brady, Burrow and more hit the tables at the all new Gridiron Heights Sportsbook ",
      url: "https://bleacherreport.com/post/hero-3/a561e8ce-2876-4707-b77e-ea0d9b039130",
      urlToImage:
        "https://img.bleacherreport.net/cms/media/image/ae/41/d9/49/ea50/469b/a762/bc82ada95b03/crop_exact_gh16_thumb_WIDE.jpg?h=1080&q=90&w=1920",
      publishedAt: "2022-01-19T05:52:22.981582Z",
      content:
        "Brady, Burrow and more hit the tables at the all new Gridiron Heights Sportsbook",
    },
    {
      source: { id: "reddit-r-all", name: "Reddit /r/all" },
      author: null,
      title:
        'r/sports - [Highlight] Eli: Let\'s go to Peyton." Peyton: "I can\'t hear sh*t" Eli: "Never mind"',
      description: "15,672 votes and 294 comments so far on Reddit",
      url: "https://www.reddit.com/r/sports/comments/s6lm0q/highlight_eli_lets_go_to_peyton_peyton_i_cant/",
      urlToImage:
        "https://external-preview.redd.it/o7wyNx3uOBQqvpNJ_Ap_YIjJiRP8nQ7JkG5Bl9UQif8.png?format=pjpg&auto=webp&s=ad303fd785713e4bf9c2694d328d9ed0f1f5f844",
      publishedAt: "2022-01-18T05:37:40.717789Z",
      content:
        "Join Our Discord Server!\r\nWelcome to r/sports\r\nWe created a Discord server for our community and would like to invite all of you to join! You'll be able to discuss sports with users around the world … [+287 chars]",
    },
    {
      source: { id: "the-globe-and-mail", name: "The Globe And Mail" },
      author: "Grant Robertson, Rachel Brady",
      title:
        "Behind the story: How a Canadian Olympian’s admission sparked a closer look at the scope of eating disorders inside elite amateur sport",
      description:
        "Athletes have long struggled with eating disorders. But the prevalence of those issues, particularly in sports not typically associated with the problem, has stayed mostly hidden",
      url: "https://www.theglobeandmail.com/canada/article-globe-investigation-canadian-olympians-eating-disorder/",
      urlToImage:
        "https://www.theglobeandmail.com/resizer/IPRXAX7qEwAxftQPnWExeHM3RZM=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/S3YYVTY67ZDU3AJL5O7ZFPC2L4.JPG",
      publishedAt: "2021-12-17T13:57:40Z",
      content:
        "MoreDangerous Games: The Globes full reportBehind the storyExperts on solutionsOn suspect sciencePodcast: Grant Robertson and Rachel Brady on The Decibel\r\nIt began with a startling admission: Probabl… [+5192 chars]",
    }
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    }
  }

  async componentDidMount(){
     this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      })
      this.props.setProgress(100);
  }

  handlePrevClick = async ()=>{
    this.props.setProgress(10);
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});

    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles:parsedData.articles
    })
    this.props.setProgress(100);
  }
  handleNextClick = async ()=>{
    console.log("Next")

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading:false})
      console.log(parsedData);
      this.setState({
        page : (this.state.page + 1),
        articles:parsedData.articles
      })
      this.props.setProgress(100);
    }

    
  }

  

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsBook - {this.props.category} Top Headlines</h2>
        {this.state.loading && <Spinner/>}

         <div className="row">
           {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 45):""}
                  description={element.description?element.description.slice(0, 88):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author?element.author:"Unknown"}
                  date={element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>

        <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
