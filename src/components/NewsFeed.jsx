import React, {useState, useEffect} from "react";
import Headline from "./Headline";
import NewsFeedItem from "./NewsFeedItem";

const NewsFeed = () =>{
    const API_KEY = "d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac";
    const [news, setNews] = useState({});
    const [error, setError] = useState("");
    const [isFinished, setFinished] = useState(false);

    useEffect(() => {
      getNews()
    },[isFinished]); 

    const getNews = async () =>{
        await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + API_KEY,{
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            }})
          .then(response => response.json())
          .then(data => {
              setNews(data);
              setFinished(true);
              })
          .catch(error => setError(error));

          //console.log(news.results);
    } 

    return(
        <div className="newsfeed">     
        <h1>The New York Times</h1>
            {news.results != undefined ? <Headline></Headline> : <p>Loading</p>}       
            {news.results != undefined ? news.results.map((item, index) => {
                            return (
                                <NewsFeedItem key={index} 
                                              uri={item.uri}
                                              url={item.url}
                                              section={item.section}
                                              title={item.title}
                                              media={item.media}
                                              abstract={item.abstract}
                                              byline={item.byline}

                                />
                                )}) : <p>Loading</p>
            } 
        </div>
    );
}

export default NewsFeed;