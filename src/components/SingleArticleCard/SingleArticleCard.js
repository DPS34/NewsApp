import React from 'react';
import './SingleArticleCard.sass'

function SingleArticleCard(article) {
    console.log()

    function getBackground(image) {
        return {backgroundImage: `url(${image})`}
    }

    function saveClick(url) {
        window.open(url, "_blank")
        const data = {
            title: article.article.title,
            image: article.article.image,
            description: article.article.description,
            publishedAt: article.article.publishedAt,
            url: article.article.url
        }
        fetch('http://localhost:3001/saveArticle', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    return (
        <div style={getBackground(article.article.image)} className='card'>
            <a onClick={() => saveClick(article.article.url)} className="dark-bg text-white d-flex flex-column justify-content-between">
                <h2 className='ellipsis'>{article.article.title}</h2>
                <p className='ellipsis'>{article.article.description}</p>
                <p>Published at <span>{article.article.publishedAt.slice(0, 10)}</span></p>
            </a>
        </div>
    );
}

export default SingleArticleCard;