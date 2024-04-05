import React from 'react';
import { useState } from 'react';
import Nav from './navbar/nav.jsx';
import './top.css'


const Top = () => {

    const [ListTop, LetlistTop] = useState(['kim jesteśmy?', 'oś czasu', 'wspierają nas', 'wesprzyj nas', 'filmy', 'kontakt']);

    return (
        <>
        <div className='content'>
            <div className='title'>
                <p className='unbounded'>FaroTech</p>
            </div>
            <div>
                <ul>
                {ListTop.map((item, index) => (
                    <li key={index}><p>{item}</p></li>
                ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Top