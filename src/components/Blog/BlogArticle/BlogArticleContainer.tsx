import React from 'react'
import { BlogArticle } from './BlogArticle'
import { blogRef } from '../../../firebase/firebase'

interface BlogArticleContainerProps {
        id: 'string'
}



export const BlogArticleContainer: React.FC<BlogArticleContainerProps> = ({id}) => {
        const [loading, setLoading] = React.useState(false)
        const [blog, setBlog] = React.useState('')
        const [error, setError] = React.useState('')
        
        const fetchBlog = ()=>{
                setLoading(true)
                blogRef.doc(id).get().then(function(doc){
                        setLoading(false)
                        if(doc.exists){
                                console.log(doc.data())
                        }else{
                                setError('Hmmm! I have looked all over the place but still cannot find you blog.')
                        }
                })
        }

        React.useEffect(()=>{
                
        },[])
        return (<BlogArticle markDown={''}/>);
}