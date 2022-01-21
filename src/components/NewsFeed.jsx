import React, {useState, useEffect} from "react";
import Sections from "./Sections";
import NewsFeedItem from "./NewsFeedItem";

const NewsFeed = () =>{
    const API_KEY = "d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac";
    const [news, setNews] = useState({});
    const [error, setError] = useState("");
    const [isFinished, setFinished] = useState(false);
    const [selectedSection, setSelectedSection] = useState("All");

    useEffect(() => {
      getNews()
    },[selectedSection]); 

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
    } 

    const getSections = () =>{
        var sections = [];
        sections = [...new Set(news.results.map(item => item.section))]//Get unique sections; Always be sure that you're not mapping an object-> it's for arrays only
        return sections;
    }

    const setSelectedSectionNow = (sectionName) => {
            setSelectedSection(sectionName);
    }

    const getNewsFeedItems =  () => {
        //should return the result of the Array.map so the component will display
        return news.results.map((item, index) =>
                                {
                                   if(item.section == selectedSection || selectedSection == "All") 
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
                                        )
                                    
                                }
                         );

        
        
    }

   return(
        <div className="newsfeed">             
            <div className="newsfeed-sections">
                {news.results !== undefined ? <Sections sections={getSections()} selectSection={setSelectedSectionNow}/> : <p>{error}</p>}
            </div>
            <div id="newsFeedItems" className="newsfeed-items">
                {news.results !== undefined ? getNewsFeedItems("All") : <p>{error}</p>}                    
            </div>            
        </div>
    );
}

export default NewsFeed;