import React from 'react'
import {Link} from 'react-router-dom'
import './blogCard.css'
interface HomeBlog {
    title: string,
    date: any,
    id: string,
    className:string,
    admin?:boolean
}


export const BlogCard: React.FC<HomeBlog> = ({ title, date, id,className, admin = false }) => {

    return (
            <div className={className}>
                    <Link to={admin?`/admin/blog/${id}`:`/blog/${id}`}>
                            <div className="blog-desc">
                                    <h2>{title}</h2>
                                    <p className="blog-date">{date.toDate().toDateString()}</p>
                            </div>
                    </Link>
            </div>
    )
}