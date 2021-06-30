import React from 'react';
import './SingleArticleCard.sass'

function SingleArticleCard(article) {
    console.log()

    function getBackground(image) {
        return {backgroundImage: `url(${image})`}
    }

    return (
        <div style={getBackground(article.article.image)} className='card'>
            <a className="dark-bg text-white d-flex flex-column justify-content-between" href={article.article.url}>
                <h2 className='ellipsis'>{article.article.title}</h2>
                <p className='ellipsis'>{article.article.description}</p>
                <p>Published at <span>{article.article.publishedAt.slice(0, 10)}</span></p>
            </a>
        </div>
    );
}

export default SingleArticleCard;