import React from 'react'


export default function Card() {
    return (
        <div className='card'>
            <img 
                src='https://i.postimg.cc/1zSkYcSt/katie-zaferes.png' 
                alt='' 
                className='card--image'
            />
            <div className='card--stats'>
                <img 
                    src='https://i.postimg.cc/L6R0S47C/star.png' 
                    alt='' 
                    className='card--star'
                />
                <span>5.0</span>
                <span className='gray'>(6) . </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / Person</p>
        </div>
    )
}
