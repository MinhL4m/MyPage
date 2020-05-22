import React from 'react'
import './blogCard.css'
interface HomeBlog {
    title: string,
    date: string,
    description: string,
    url: string
}


export const BlogCard: React.FC<HomeBlog> = ({ title, date, description, url }) => {
    return (
            <div className="blog-row">
                    <a href={url}>
                            <div className="blog-desc">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <p className="blog-date">{date}</p>
                            </div>
                    </a>
            </div>
    )
}