import React from 'react'
import { BlogCard } from '../../common/blogCard/BlogCard'
interface BlogProps {
        homeBlogList: Array<HomeBlog>,
}

interface HomeBlog {
        title: string,
        date: string,
        content: string,
        id: string
}


export const Blog: React.FC<BlogProps> = ({ homeBlogList}) => {

        return (

                (<section className="home-blog">
                        <h1 className="section-header">Blog</h1>
                        {homeBlogList.length < 1 ?
                                <>
                                        {homeBlogList.map(homeBlog => {
                                                return <BlogCard className="blog-row" {...homeBlog} key={homeBlog.id} />
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                                <a href="/blog">Want To Read More?</a>
                                        </div>
                                </> :
                                (<div style={{ 'textAlign': 'center' }}>
                                        <a href="/blog">Something went wrong here! However, you still can go to blog page by click me.</a>
                                </div>)
                        }
                </section>)


        );
}