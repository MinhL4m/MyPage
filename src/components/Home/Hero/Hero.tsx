import React from 'react'
import './hero.css'
import { Icons } from '../../common/Icon/Icons'


export const Hero: React.FC<{}> = () => {
    return (
        <div className="hero">
            <svg className="scene" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800">
                <path
                    d="M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z"
                />
            </svg>
            <div className="info">
                <h1>I'm Minh</h1>
                <h4>Web Developer</h4>
                <button className="hero-btn" onClick={() => window.open('https://www.google.com')}>
                    <span className="l">C</span>
                    <span className="l">O</span>
                    <span className="l">N</span>
                    <span className="l">T</span>
                    <span className="l">A</span>
                    <span className="l">C</span>
                    <span className="l">T</span>
                </button>
                <Icons className="icons hero-icons"/>
            </div>
        </div>);
}