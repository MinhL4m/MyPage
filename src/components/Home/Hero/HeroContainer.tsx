import React, { useEffect } from 'react'
import { Hero } from './Hero'
import { MorphingBG } from './heroBackground'

/**
 * Hero button
 */
const contactBtnHover = () => {
    const letters = document.getElementsByClassName('l')

    setTimeout(() => (letters[0].textContent = 'L'), 200);
    setTimeout(() => (letters[1].textContent = 'e'), 800);
    setTimeout(() => (letters[2].textContent = 't'), 400);
    setTimeout(() => (letters[3].textContent = "'"), 500);
    setTimeout(() => (letters[4].textContent = 's'), 700);
    setTimeout(() => (letters[5].textContent = 'G'), 300);
    setTimeout(() => (letters[6].textContent = 'o'), 600);
}

const contactBtnOut = () => {
    const letters = document.getElementsByClassName('l')

    setTimeout(() => (letters[0].textContent = 'C'), 200);
    setTimeout(() => (letters[1].textContent = 'O'), 800);
    setTimeout(() => (letters[2].textContent = 'N'), 400);
    setTimeout(() => (letters[3].textContent = "T"), 500);
    setTimeout(() => (letters[4].textContent = 'A'), 700);
    setTimeout(() => (letters[5].textContent = 'C'), 300);
    setTimeout(() => (letters[6].textContent = 'T'), 600);
}


export const HeroContainer: React.FC<{}> = () => {
    useEffect(() => {
        let morphingBG = new MorphingBG(document.querySelector('svg.scene'))
        document.querySelector(".hero-btn")?.addEventListener("mouseenter", contactBtnHover)
        document.querySelector(".hero-btn")?.addEventListener("mouseleave", contactBtnOut)
        return () => {
            //eslint-disable-next-line
            morphingBG.removeEvents()
            document.querySelector(".hero-btn")?.removeEventListener("mouseenter", contactBtnHover)
            document.querySelector(".hero-btn")?.removeEventListener("mouseleave", contactBtnOut)
        }
    }, [])
    return (<header><Hero /></header>);
}