import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=96b4d200b0384eba8a70f19361cf6f93';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
    return (
        <div className="p-3">
         <h2 className="text-center"> Use React BootStrap Head LIne : {articles.length} </h2>
         <ul>
             {articles.map(art=><News article={art}></News>)}
         </ul>
        </div>
    );
};

export default TopHeadLine;