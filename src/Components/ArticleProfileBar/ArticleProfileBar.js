import React from 'react';
import "./ArticleProfileBar.css"

const ArtielProfileBar = (props) => {
    return (<div className='article-profile-bar-container'>
        <div className='article-profile-image'></div>
        <div className='article-profile-author'>Justin Kessler</div>
        <div className='article-profile-title'>Software Engineer</div>
        <div className='article-profile-badges'></div>
        <div className='article-interact-buttons-container'>
            <div className='article-interact-button'>117 <i class="far fa-heart"></i></div>
            <div className='article-interact-button'><i class="far fa-comment"></i></div>
            <div className='article-interact-button'><i class="far fa-bookmark"></i></div>
        </div>

    </div>);
}

export default ArtielProfileBar;