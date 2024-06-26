import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Post() {
    const [post, setPost] = useState({
        title: '',
        body: '',
    })
    const handlePost = async(e) => {
        e.preventDefault()
        const {title, body} = post
        try{
            const response = await axios.post('/post', {
                title, body
            })
            if(response.error){
                toast.error(response.error)
            }else{
                setPost({
                    title: '',
                    body: ''
                })
                toast.success('Post Successful!')
            }
        }catch(error){
            console.log(error)
            toast.error('An error occurred while posting.');
        }

    }
    return (
        <div>
            <h1>Post Something!</h1>
            <form onSubmit={handlePost}>
                <div>
                <label>Title</label>
                <input type='text' placeholder='enter title' value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
                </div>
                <div>
                <label>Body</label>
                <input type='text' placeholder='enter body' value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} />
                <button type='submit'>Post</button>
                </div>
            </form>
        </div>
    );
};

export default Post;
