import React from "react";

const Sections = (props) =>{

    return(
        <React.Fragment>
            <span onClick={props.selectSection.bind(null,"All")}>All</span>
            {props.sections.map((item, index) => <span key={index} onClick={props.selectSection.bind(null,item)}>{item}</span>)}
        </React.Fragment>        
    );
}

export default Sections;
