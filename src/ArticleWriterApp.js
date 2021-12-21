import React from 'react';
import "./ArticleWriterApp.css"

import TextSection from './Components/TextSections/TextSection';

import { useState, useEffect } from 'react'






const ArticleWriterApp = () => {
    const [viewState, setViewState] = useState('write')
    const [textSections, setTextSections] = useState([{
        node: 1
    }])


    // For the effect of previewing the article change the classes & attributes of the div.


    function renderViewState() {
        if (viewState === 'write') {

        }
    }








    function addTextSection(e) {

        let theSections = [...textSections]




        if (e.key === 'Enter') {
            e.preventDefault()
            theSections.push('test')
            setTextSections(theSections)
        }
        else {
            // props.updateTextSection(props.index, theText)
        }


    }


    return (<div className="article-writer-app">

        <div className='view-changer-nav-bar-container'>
            <div className={'view-changer-nav-selector ' + (viewState === 'write' ? 'selector-active' : '')} onClick={() => { setViewState('write') }}>
                Write
            </div>
            <div className={'view-changer-nav-selector ' + (viewState === 'preview' ? 'selector-active' : '')} onClick={() => { setViewState('preview') }}>
                Preview
            </div>
            <div className='view-changer-nav-selector'>
                Share
            </div>
            <div className='view-changer-nav-selector publish-button'>
                Publish
            </div>
        </div>

        <div className='text-editor-bar-container'></div>

        <div className='text-sections-container'>
            {textSections.map((section) => <TextSection viewState={viewState} addTextSection={addTextSection} />)}

        </div>







    </div>);
}

export default ArticleWriterApp;