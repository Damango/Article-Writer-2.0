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
    }

    function changeTextProperties(select, type, value) {
        let selection = window.getSelection();
        console.log(selection)
        // Creates a new element, and insert the selected text with the chosen font inside
        let e = document.createElement('span');



        e.style = 'font-weight:' + 600 + ';';

        console.log(e)

        e.innerHTML = selection.toString();

        let range = selection.getRangeAt(0);
        range.deleteContents(); // Deletes selected text…
        range.insertNode(e); // … and inserts the new element at its place

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

        <div className='text-editor-bar-container'>

            <div className='text-editor-button'>
                <i class="fas fa-font" style={{ marginRight: '10px' }}></i> <span style={{ marginRight: '10px' }}>Roboto</span > <i class="fas fa-sort-down"></i>
            </div>

            <div className='text-editor-button' >
                <i class="fas fa-bold" onMouseDown={() => { changeTextProperties() }}></i>
            </div>

            <div className='text-editor-button'>
                <i class="fas fa-italic"></i>
            </div>

            <div className='text-editor-button'>
                <i class="fas fa-underline"></i>
            </div>

            <div className='text-editor-button'>
                <i class="fas fa-strikethrough"></i>
            </div>



        </div>

        <div className='text-sections-container'>
            {textSections.map((section) => <TextSection changeTextProperties={changeTextProperties} viewState={viewState} addTextSection={addTextSection} />)}

        </div>







    </div >);
}

export default ArticleWriterApp;