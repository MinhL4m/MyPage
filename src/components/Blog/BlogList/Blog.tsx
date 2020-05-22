import React from 'react'
import { BlogCard } from '../../common/BlogCard';
import './blog.css'

interface BlogProps {
        blogList: Array<Blog>,
        error: boolean
}

interface Blog {
        title: string,
        date: string,
        description: string,
        id: string
}

export const Blog: React.FC<BlogProps> = ({ blogList, error }) => {
        return (
                <div className="blog-list col-9">
                        <h1 className="section-header">Blog</h1>
                        {!error ?
                                <>
                                        {blogList.map(blog => {
                                                return <BlogCard className="blog-row blog-page-row " {...blog} key={blog.id} />
                                        })}
                                </> :
                                (<div style={{ 'textAlign': 'center' }}>
                                        <p>Something went wrong here! Please try again later. Sorry for this inconvience</p>
                                </div>)
                        }
                </div>
        );
}