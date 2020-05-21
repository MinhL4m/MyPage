import React, {useEffect} from 'react'
import { About } from './About'

let options = {
    root: null,
    rootMargin: '-10%',
    thresholds: 0.1
}

export const AboutContainer: React.FC<{}> = () => {
    useEffect(() => {
        var svg = document.querySelector('.self-img')
        let callback = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    svg?.classList.add('appear-self-img')
                } else {
                    svg?.classList.remove('appear-self-img')
                }
            })
        }
        let observer = new IntersectionObserver(callback, options)
        observer.observe(document.querySelector('.about') as Element)
    }, [])

    return (
        <><About /></>
    );
}