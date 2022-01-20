import React, {useState, useEffect} from "react";
import NewsFeedItem from "./NewsFeedItem";

const NewsFeed = () =>{
    const [news, setNews] = useState({});
    const [error, setError] = useState("");
    const [isFinished, setFinished] = useState(false);

    useEffect(() => {
      getNews()
    },[isFinished]); 

    const getNews = async () =>{
        await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac`,{
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

          console.log(news.results);
    } 

    return(
        <div className="newsfeed">
              { news.results != undefined ? news.results.map((item, index) => 
                                <NewsFeedItem key={index} 
                                              uri={item.uri}
                                              media={item.media}
                                />) : <p>Loading</p>   } 
        </div>
    );
}

export default NewsFeed;