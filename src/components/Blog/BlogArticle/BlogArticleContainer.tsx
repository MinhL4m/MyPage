import React from 'react'
import { BlogArticle } from './BlogArticle'
import { blogRef } from '../../../firebase/firebase'
import {useParams} from 'react-router-dom'

interface BlogArticleContainerProps {

}



export const BlogArticleContainer: React.FC<BlogArticleContainerProps> = ({}) => {
        const {id} = useParams()

        const [loading, setLoading] = React.useState(false)
        const [blog, setBlog] = React.useState('')
        const [error, setError] = React.useState('')
        
        const fetchBlog = ()=>{
                setLoading(true)
                blogRef.doc(id).get().then(function(doc){
                        setLoading(false)
                        if(doc.exists){
                                const obj = doc.data() as any
                                let content = `# ${obj.title}\n*${obj.date.toDate().toDateString()}*\n\n${obj.content}`
                                setBlog(content)
                        }else{
                                setError('Hmmm! I have looked all over the place but still cannot find you blog.')
                        }
                })
        }

        React.useEffect(()=>{
                fetchBlog()
        },[])
        return (<BlogArticle markDown={blog}/>);
}