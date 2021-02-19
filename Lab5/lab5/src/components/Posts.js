//imports react
import React, {useState, useEffect} from 'react';
//imports axios
import axios from 'axios';
//defines posts
const Posts = () => {
    const [Posts, setPosts] = useState ();
//imports data from axios
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });

    }, []);
    //assigns what data will be returned from axios
    return (
        <div>
            <h1>Post Data</h1>
            {Posts && 
            Posts.map((post) => {
                const {id, title, body} = post;
                return (
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned to user: {id}</h6>
                        <h7>{body}</h7>
                    
                    </div>
                )
            })}
            
        </div>

    );
};

export default Posts;