import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:4000/api/'
export function loadBlogs() {
    return (dispatch: any) => {
        axios.get(`${url}blogs`)
            .then((res) => {
                let data = res.data
                dispatch({ type: 'LOAD_BLOG', payload: { blogs: data } })
            }).catch((error) => {
                console.error(error)
            })
    }
}

export function getBlog(blog_id: string) {
    return (dispatch:any) => {
        axios.get(`${url}blog/${blog_id}`)
        .then((res) => {
            let data = res.data
            dispatch({type:'VIEW_BLOG', payload:{blog:data}})
        }).catch(error => {
            console.error(error)
        })
    }
}

//TODO decide what auth to use 