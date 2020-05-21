import React from 'react'
import './blog.css'
interface BlogProps {
        homeBlogList: Array<HomeBlog>,
        error: boolean
}

interface HomeBlog {
        title: string,
        date: string,
        description: string,
        url: string
}

const BlogCard: React.FC<HomeBlog> = ({ title, date, description, url }) => {
        React.useEffect(() => {
                console.log(title)
        })
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

export const Blog: React.FC<BlogProps> = ({ homeBlogList, error }) => {
        React.useEffect(() => {
                console.log(homeBlogList)
        })
        return (

                (<section className="blog">
                        <h1 className="section-header">Blog</h1>
                        {!error ?
                                <>
                                        {homeBlogList.map(homeBlog => {
                                                return <BlogCard {...homeBlog} key={homeBlog.url} />
                                        })}
                                        <div className="blog-link">
                                                <a href="/blog">Want To Read More?</a>
                                        </div>
                                </> :
                                (<div className="blog-link">
                                        <a href="/blog">Something went wrong here! However, you still can go to blog page by click me.</a>
                                </div>)
                        }
                </section>)


        );
}