import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { addHomeBlog } from '../../../redux/action'
import { Blog } from './Blog'

interface HomeBlog {
    title: string,
    date: string,
    description: string,
    url: string
}

const tempData = [
    {
        title: 'Redux 101',
        date:'20/May/2020',
        description: 'As an dummy like me, I take me some time to wrap my head around redux...',
        url:'/asd'
    },
    {
        title: 'Redux 101',
        date:'20/May/2020',
        description: 'As an dummy like me, I take me some time to wrap my head around redux...',
        url:'/asd'
    },
    {
        title: 'Redux 101',
        date:'20/May/2020',
        description: 'As an dummy like me, I take me some time to wrap my head around redux...',
        url:'/asd'
    },
]

function mapDispatchToProps(dispatch: any) {
    return {
        addHomeBlog: (homeBlog: Array<HomeBlog>) => dispatch(addHomeBlog(homeBlog))
    }
}

function mapStateToProps(state: any) {
    return {
        homeBlogList: state.homeBlogList
    }
}

const getBlogs = async (setError: React.Dispatch<React.SetStateAction<boolean>>, addHomeBlog: any) => {
    const response = await fetch('url')
    if (response.status >= 400) {
        setError(true)
    } else {
        const data = await response.json();
        addHomeBlog([data[0],data[1],data[2]])
    }
}

const BlogLogic: React.FC<{ homeBlogList: any, addHomeBlog: any }> = ({ homeBlogList, addHomeBlog }) => {

    const [error, setError] = useState(false)

    // useEffect(() => {
    //     console.log(homeBlogList)
    //     if (homeBlogList.length === 0) {
    //         getBlogs(setError, addHomeBlog)
    //     }
    // }, [])

    //TODO: WHEN have the backend up change into homeBlogList={homeBlogList}
    return (<Blog homeBlogList={tempData} error={error}></Blog>);
}
export const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(BlogLogic)