import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { loadBlogs } from '../../../redux/action/action'
import { Blog } from './Blog'

interface HomeBlog {
    title: string,
    date: string,
    content: string,
    url: string
}

const tempData = [
    {
        title: 'Redux 101',
        date:'20/May/2020',
        content: 'As an dummy like me, I take me some time to wrap my head around redux...',
        id:'asd'
    },
    {
        title: 'Redux 101',
        date:'20/May/2020',
        content: 'As an dummy like me, I take me some time to wrap my head around redux...',
        id:'asd'
    },
    {
        title: 'Redux 101',
        date:'20/May/2020',
        content: 'As an dummy like me, I take me some time to wrap my head around redux...',
        id:'asd'
    },
]


function mapStateToProps(state: any) {
    return {
        blogs: state.blogs
    }
}


const BlogLogic: React.FC<{ homeBlogList: any, addHomeBlog: any }> = ({ homeBlogList, addHomeBlog }) => {

    

    

    //TODO: WHEN have the backend up change into homeBlogList={homeBlogList}
    return (<Blog homeBlogList={tempData}></Blog>);
}
export const BlogContainer = connect(mapStateToProps, {loadBlogs})(BlogLogic)