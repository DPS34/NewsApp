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
        fetch('https://gnews.io/api/v4/search?q='+ getKeywords(arg) +'&token=4a1350c327a1c412c1f1fec37e0e1e67&lang=en&max=9').then(res => res.json()).then(data => {
            setPosts(data.articles)
            console.log(data)
        })
        setPosts([])
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
        </div> : null
    );
}

export default SearchResults;