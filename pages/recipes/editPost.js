import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import EditPost from '@/components/Post/EditPost';

const editPost = () => {
    const router = useRouter();
    const dessertId = router.query.id;
    useEffect(()=>{
        console.log(dessertId)
    }, [])
    return (
        <div>
            <EditPost dessertId={dessertId}></EditPost>
        </div>
    );
};

export default editPost;