import React from "react";
import { Redirect } from "react-router-dom";


const News = (props) => {
    if(!props.isAuth){
        return <Redirect to = {'/login'} />
    };
    return (
        <div>News</div>
    )
}

export default News;

