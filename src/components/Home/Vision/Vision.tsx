import React from 'react'
import './vision.css'

export const Vision: React.FC<{}> = () => {
    return (
        <section className="vision">
            <h1 className="section-header">Vision</h1>
            <p className="center vision-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae explicabo,
            dolorem labore
            libero, nostrum quasi asperiores sapiente aliquid, error nemo consequuntur impedit harum! Sequi,
            repellendus at temporibus explicabo impedit reprehenderit eligendi iure non odit? Nemo labore error
            dolorem similique reprehenderit, eum aperiam molestiae. Praesentium dicta alias dolorum quam,
                    perferendis, reiciendis quia accusantium doloribus earum dignissimos omnis, iure maiores. Quam, a.</p>
            <img id="rellex-1" className="rellax rellax3" src="https://img.icons8.com/plasticine/100/000000/react.png" alt="react" />
            <img id="rellex-2" className="rellax rellax3" src="https://img.icons8.com/color/96/000000/javascript.png" alt="javascript" />
            <img id="rellex-3" className="rellax rellax1" src="https://img.icons8.com/color/80/000000/css3.png" alt="css3" />
            <img id="rellex-4" className="rellax rellax1" src="https://img.icons8.com/color/96/000000/nodejs.png" alt="nodejs" />
        </section>
    );
}