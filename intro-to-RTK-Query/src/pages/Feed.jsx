import React from 'react';
import { useGetPostsQuery, useSetPostMutation } from '../redux/features/api/baseApi';
import PostCard from '../components/layouts/PostCard';
import { useForm } from 'react-hook-form';

const Feed = () => {
    const {isLoading, isError, data: posts} = useGetPostsQuery();
    const {register, handleSubmit} = useForm();
    const [setPost, {data: postData}] = useSetPostMutation();

    console.log(postData);
    
    const onSubmit = (data) =>{
        setPost(data);
    }

    if(isLoading){
        return <p>Loading</p>
    }
    if(!isLoading && isError){
        return <p>Something went wrong</p>
    }

    return (
        <div>
            <h1 className='text-xl'>Feed</h1>
            <div className='my-10'>
                <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-full border p-3 rounded-md' type="text" 
                    {...register('post')} 
                    />
                    <button
                        type='submit'
                        className='text-lg p-3 border rounded-md'>
                     Post
                    </button>
                </form>
            </div>
            <div className='flex flex-col gap-3'>
                {posts.map(post=>
                    <PostCard key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default Feed;