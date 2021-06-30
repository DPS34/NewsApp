import React from 'react';
import './SearchResults.sass'
import {useEffect, useState} from "react";
import SingleArticleCard from "../SingleArticleCard/SingleArticleCard";
import {useParams} from 'react-router-dom'


function SearchResults(homepage) {
    const param = useParams()

    const [getPosts, setPosts] = useState(null)

    function getKeywords(arg) {
        if (homepage.homepage) {
            return 'random'
        }
        if (!homepage.homepage) {
            return arg
        }
    }

    useEffect(() => {
        const arg = encodeURI(param.arguments)
        fetch('https://gnews.io/api/v4/search?q='+ getKeywords(arg) +'&token=a5432cc4496280258e736b62ec506317&lang=en&max=9').then(res => res.json()).then(data => {
            setPosts(data.articles)
        })
    },[param])

    return (
        getPosts ?
        <div>
            {getPosts.length === 0 ? <div className='search-error d-flex justify-content-center align-items-center flex-column' >
                <p className='text-white'>Your search - </p> <span className='text-white' style={{fontWeight: '700'}}>{param.arguments}</span> <p className='text-white'> - did not match any articles </p>
            </div> : <div className='board board-m'>
                {getPosts.map((article, index) => (
                        <SingleArticleCard key={index} article={article}/>
                    )
                )}
            </div>}
        </div> : <div className='min-height d-flex justify-content-center align-items-center'>
                <div style={{marginTop: "3%"}} className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    );
}

export default SearchResults;