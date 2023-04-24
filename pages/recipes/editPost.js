import React from 'react';
import { useRouter } from "next/router";
import EditPost from '@/components/Post/EditPost';

const editPost = () => {
    const router = useRouter();
    const dessertId = router.query;
    return (
        <div>
            <EditPost dessertId={dessertId}></EditPost>
        </div>
    );
};

export default editPost;