import React from 'react'
import './blogCard.css'
interface HomeBlog {
    title: string,
    date: string,
    description: string,
    id: string,
    className:string
}


export const BlogCard: React.FC<HomeBlog> = ({ title, date, description, id,className }) => {
    return (
            <div className={className}>
                    <a href={`/${id}`}>
                            <div className="blog-desc">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <p className="blog-date">{date}</p>
                            </div>
                    </a>
            </div>
    )
}