import React from 'react'
import { BlogCard } from '../../common/BlogCard'
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