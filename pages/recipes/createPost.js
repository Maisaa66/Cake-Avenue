import PostCard from '@/components/Post/PostCard';
import React, { useState, useEffect } from 'react';
import {getSession , signIn} from 'next-auth/react';

const createPost = () => {
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        const securePage = async() =>{
             const session = await getSession();
             if(!session){
                signIn();

             }else{
                setLoading(false)
             }
        }
        securePage()
    },[]);
    if(loading){ return <h1 className='text-center fs-1' style={{fontFamily:"var(--textFont)"}}>You are not authorized to createpost, please login</h1>}
    return (
        <div>
            <PostCard></PostCard>
        </div>
    );
};

export default createPost;