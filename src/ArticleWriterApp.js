import React from 'react';
import "./ArticleWriterApp.css"

import TextSection from './Components/TextSections/TextSection';
import ArticleProfileBar from './Components/ArticleProfileBar/ArticleProfileBar';

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

    function changeTextProperties(type, value) {
        let selection = window.getSelection();
        console.log(selection.anchorNode.parentElement) //selection.parentElement
        // Creates a new element, and insert the selected text with the chosen font inside
        let e = document.createElement('span');

        if (type === 'weight') {
            e.style = 'font-weight:' + value + ';';
        }

        else if (type === 'style') {
            e.style = 'font-style:' + value + ';'
        }

        e.innerHTML = selection.toString();

        let range = selection.getRangeAt(0);
        range.deleteContents(); // Deletes selected text…
        range.insertNode(e); // … and inserts the new element at its place

    }



    return (<div className="article-writer-app">

        <ArticleProfileBar />

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

        <div className='text-editor-bar-container' style={{ display: viewState === 'write' ? '' : 'none' }}>

            <div className="text-editor-button">

                <button><i class="fas fa-plus-circle" style={{ marginRight: 5 }}></i>Insert</button>
            </div>

            <div className='text-editor-button'>
                <span style={{ marginRight: '8px' }}>Roboto</span > <i class="fas fa-sort-down" style={{ position: 'relative', top: '-3px' }}></i>
            </div>

            <div className='text-editor-button' >
                <i class="fas fa-bold" onMouseDown={() => { changeTextProperties('weight', 'bold') }}></i>
            </div>

            <div className='text-editor-button'>
                <i class="fas fa-italic" onMouseDown={() => { changeTextProperties('style', 'italic') }}></i>
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