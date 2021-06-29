import React from 'react';
import './SearchResults.sass'
import SingleArticleCard from "../SingleArticleCard/SingleArticleCard";
import {useParams} from 'react-router-dom'

function SearchResults() {
    const param = useParams()

    return (
        <div className='board'>
            <SingleArticleCard/>
        </div>
    );
}

export default SearchResults;