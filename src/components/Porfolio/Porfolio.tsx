import React from 'react'
import './porfolio.css'
interface PorfolioProps {
        porfolioList: Array<Porfolio>
}

interface Porfolio {
        img: string,
        title: string,
        content: string,
        url: string
}

export const Porfolio: React.FC<PorfolioProps> = ({ porfolioList }) => {
        return (
                <div className="flex">
                        {
                                porfolioList.map((porfolio) => {
                                        return (
                                                <div className="col-3 porfolio-card" key={porfolio.url}>
                                                        <a target="_blank" rel="noopener noreferrer" href={porfolio.url}>
                                                                <div className="porfolio-img" style={{ backgroundImage: `url(${porfolio.img})` }}></div>
                                                                <div className="porfolio-content">
                                                                        <h2>{porfolio.title}</h2>
                                                                        <p className="porfolio-description">{porfolio.content}</p>
                                                                </div>
                                                        </a>
                                                </div>
                                        )
                                })
                        }
                </div>
        );
}