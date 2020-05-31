import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { loadBlogs } from '../../../redux/action/action'
import { Blog } from './Blog'

interface HomeBlog {
    title: string,
    date: string,
    content: string,
    url: string
}


function mapStateToProps(state: any) {
    return {
        blogs: state.blog.blogs
    }
}


const BlogLogic: React.FC<{ blogs: any, loadBlogs: any }> = ({ blogs, loadBlogs }) => {

    useEffect(()=>{
        if(blogs?.length === 0){
            loadBlogs()
        }
    },[])
    

    return (<Blog homeBlogList={blogs.length > 3 ? [blogs[0],blogs[1],blogs[2]] : blogs }></Blog>);
}
export const BlogContainer = connect(mapStateToProps, {loadBlogs})(BlogLogic)