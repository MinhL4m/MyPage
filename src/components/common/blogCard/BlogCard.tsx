import React from 'react'
import './blogCard.css'
interface HomeBlog {
    title: string,
    date: string,
    content: string,
    id: string,
    className:string
}


export const BlogCard: React.FC<HomeBlog> = ({ title, date, content, id,className }) => {
    return (
            <div className={className}>
                    <a href={`/${id}`}>
                            <div className="blog-desc">
                                    <h2>{title}</h2>
                                    <p>{content.slice(0,20)+'...'}</p>
                                    <p className="blog-date">{date}</p>
                            </div>
                    </a>
            </div>
    )
}