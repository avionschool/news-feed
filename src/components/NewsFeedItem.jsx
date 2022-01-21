import React from "react";
import './../index.css';

const NewsFeedItem = (props) => {
    const showNewsDetails = props =>{
        if (props.media.length != 0 && props.media.length != undefined){ //change this with `hasOwnProperty` or `in` next time; check why those results to true always
            return (
            <div className="news-feed-item">
                {/* <h3>{props.section}</h3> */}
                <a href={props.url} target="_blank"><h5>{props.title}</h5></a>
                <div className="news-feed-item-content">
                    <div><a href={props.url} target="_blank"><img src={props.media[0]["media-metadata"][0].url}/></a></div>
                    <div className="news-feed-item-abstract">
                        <p>{props.abstract}</p>
                        <span>{props.byline}</span>
                    </div>
                </div>                                   
            </div>)
        }
        else 
            return <span>No Image</span> 
        
    }

    return(showNewsDetails(props));        
}

export default NewsFeedItem;