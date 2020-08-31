import React, { useEffect, useState } from 'react';
import NewsMu from '../NewsMu/NewsMu';

const Header = () => {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=96b4d200b0384eba8a70f19361cf6f93';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
    return (
        <div>
         <h2 className="text-center"> Use React Metarial UI Head LIne : {articles.length} </h2>
         <ul>
             {articles.map(art=><NewsMu article={art}></NewsMu>)}
         </ul>
        </div>
    );
};

export default Header;