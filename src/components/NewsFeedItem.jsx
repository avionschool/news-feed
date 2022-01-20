import React from "react";

const NewsFeedItem = (props) => {
    return(
        <div>
            {props.uri}   
            {props.media.length != 0 && props.media.length != undefined ? props.media[0].type : <span></span> }
            {/* {props.media.map((item,index) => <span key={index}>{item.type}</span> )} */}
            
        </div>
    );
}

export default NewsFeedItem;