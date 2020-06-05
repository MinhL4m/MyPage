import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


interface IconsProps {
    className: string
}

export const Icons: React.FC<IconsProps> = ({ className }) => {
    return (
        <ul className={className}>
            <li><a href="https://www.linkedin.com/in/minh-lam-1701/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.facebook.com/minhlam1701/"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            <li><a href="https://github.com/MinhL4m"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
        </ul>
    );
}