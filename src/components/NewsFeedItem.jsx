import React from "react";
import './../index.css';

const NewsFeedItem = (props) => {
    const showNewsDetails = props =>{
        if (props.media.length != 0 && props.media.length != undefined){ //change this with `hasOwnProperty` or `in` next time; check why those results to true always
            
            return (
            <div className="news-feed-item">
                <h1>{props.section}</h1>
                <h3>{props.title}</h3>
                   <p><a href={props.url} target="_blank"><img src={props.media[0]["media-metadata"][0].url}/></a></p>
            </div>)
        }
        else 
            return <span>No Image</span> 
        
    }

    return(
        <div className="news-feed-item">
            {
                showNewsDetails(props)
            }
            
            
        </div>
    );
}

export default NewsFeedItem;