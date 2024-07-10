import React from 'react'
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import image from './image.jpg';

function Card() {
    const {theme, handleClick} = useContext(ThemeContext)
    
    return (
        <>
            <div className='background'>
                <div className='card' style={{background:theme=='light'? 'white': '#1B1212', color:theme==="light"? 'black': 'purple'}}>
                    <div className='image'>
                        <img src={image} alt='' />
                    </div>
                    <div className='title'>
                        <h2>{theme}</h2>
                    </div>
                    <div className='para'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aspernatur mollitia harum ipsa! Libero animi aliquam non optio voluptas rem.
                    </div>
                    <div className='btn'>
                    <i class="ri-toggle-fill" onClick={handleClick}></i>
                    </div>
                </div>
                



            </div>
        </>
    )
}

export default Card
