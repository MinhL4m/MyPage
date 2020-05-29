import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


interface IconsProps {
    className: string
}

export const Icons: React.FC<IconsProps> = ({ className }) => {
    return (
        <ul className={className}>
            <li><a href="https://www.google.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.google.com"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href="https://www.google.com"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
        </ul>
    );
}