import React from 'react'
import {Link} from 'react-router-dom'
import './blogCard.css'
interface HomeBlog {
    title: string,
    date: any,
    content: string,
    id: string,
    className:string
}


export const BlogCard: React.FC<HomeBlog> = ({ title, date, content, id,className }) => {

    return (
            <div className={className}>
                    <Link to={`/blog/${id}`}>
                            <div className="blog-desc">
                                    <h2>{title}</h2>
                                    <p>{content.slice(0,90)+'...'}</p>
                                    <p className="blog-date">{date.toDate().toDateString()}</p>
                            </div>
                    </Link>
            </div>
    )
}