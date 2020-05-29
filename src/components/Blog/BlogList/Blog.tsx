import React from 'react'
import { BlogCard } from '../../common/blogCard/BlogCard';
import './blog.css'

interface BlogProps {
        blogList: Array<Blog>,
}

interface Blog {
        title: string,
        date: string,
        content: string,
        id: string
}

export const Blog: React.FC<BlogProps> = ({ blogList }) => {
        return (
                <div className="blog-list col-9">
                        <h1 className="section-header">Blog</h1>
                        {blogList.length < 1 ?
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