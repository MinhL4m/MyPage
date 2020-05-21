export const ACTION = {
    HOME_BLOG: 'HOME_BLOG'
}

interface HomeBlog {
    title: string,
    date: string,
    description: string,
    url: string
}

export function addHomeBlog(homeBlogList: Array<HomeBlog>){
    return {
        type: ACTION.HOME_BLOG,
        payload:{
            homeBlogList: homeBlogList
        }
    }
}