import React from 'react';
import "./TextSection.css"
import { useState, useEffect, useRef } from 'react'

const TextSection = (props) => {

    let textSectionRef = useRef(null)

    useEffect(() => {

        textSectionRef.current.focus()

    }, [])



    return (<div className='text-section-container'>

        <div className={'text-section-text-' + props.viewState} ref={textSectionRef} onKeyDown={props.addTextSection} contentEditable={props.viewState === 'write' ? 'true' : 'false'}></div>

    </div>);
}

export default TextSection;