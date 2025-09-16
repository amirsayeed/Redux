import React from 'react';
import { useGetPostByIdQuery, useGetPostsQuery } from '../redux/features/api/baseApi';
import PostCard from '../components/layouts/PostCard';

const Feed = () => {
    // const {isLoading, isError, data: posts} = useGetPostsQuery();
    const {data:post, isLoading, isError} = useGetPostByIdQuery(3);

    if(isLoading){
        return <p>Loading</p>
    }
    if(isError){
        return <p>Something went wrong</p>
    }

    return (
        <div>
            <h1 className='text-zinc-300'>Feed</h1>
            <div className='flex flex-col gap-3'>
                {/* {posts.map(post=>
                    <PostCard key={post.id} post={post}/>
                )} */}
                <PostCard post={post}/>
            </div>
        </div>
    );
};

export default Feed;