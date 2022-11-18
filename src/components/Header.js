import React from 'react';
import photo from '../images/headshot.jpg'

export default function Header(){
    return (
        <header className='header'>
        <img src={photo} width='317px' className='info-headshot' alt='headshot' />
        </header>
    );
}
